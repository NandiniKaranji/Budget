import logo from './logo.svg';
import './App.css';
import {  Container, Form, FormGroup, Grid, GridColumn, GridRow, Icon, Segment, Statistic, StatisticLabel, StatisticValue } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from'./components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import { useEffect, useState } from 'react';
import ModalEdit from './components/ModalEdit';
import {createStore} from 'redux';

function App() {
  const[entries , setEntries]= useState(initialEntries);
  const [description , setDescription] = useState ('');
  const [value , setValue ] = useState ('');
  const [isExpense , setIsExpense] = useState('');
  const [isOpen , setIsOpen] = useState(false);
  const [entryId , setEntryId] = useState();
  const [total , setTotal] = useState();
  const [totalIncome , setTotalIncome] = useState(0);
  const [totalExpense , setTotalExpense] = useState(0);

  useEffect (() => {
    if(!isOpen && entryId){
      const index = entries.findIndex(entry=> entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
       }
  },[isOpen])

  useEffect (() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) =>  {
      if(entry.isExpense){
        return (totalExpenses += entry.value);        
      }      
     return  (totalIncomes += entry.value)   ;
     })
    setTotal(totalIncomes - totalExpenses);
    setTotalExpense(totalExpenses);
    setTotalIncome(totalIncomes);  
    }, entries)

    const store = createStore((state = initialEntries)=> {
      return state;
    
    });
    console.log('State :' , store.getState());
    


  function deleteEntry(id) {
    const result = entries.filter((entry) =>  entry.id!==id);
    setEntries(result);
  }

  function editEntry (id) {
    console.log("description",description)
    
    if(id){
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
      
    }
  }

  function resetEntry () {
    setDescription('');
      setValue('');
      setIsExpense(true);
  }

  function addEntry (description , value , isExpense){
      const result = entries.concat({id : entries.length + 1 , description , value , isExpense});
      setEntries(result)
  }

  return (
    <Container>
      <MainHeader title = "Budget"/>
     <DisplayBalance title = 'Your Balance' value = {total} size = 'small' ></DisplayBalance>
     <DisplayBalances totalIncome = {totalIncome} totalExpense = {totalExpense}/>
          
    <MainHeader title='History' type = "h3"></MainHeader>

  <EntryLines entries = {entries} deleteEntry = {deleteEntry} editEntry = {editEntry} />   
     
      <MainHeader type = "h3" title = "Add New Transaction"></MainHeader>
      <NewEntryForm 
        addEntry = {addEntry}
        description = {description}
        value = {value}
        setDescription = {setDescription}
        setValue = {setValue}
        isExpense = {isExpense}
        setIsExpense = {setIsExpense} />

        <ModalEdit 
        isOpen = {isOpen} 
        setIsOpen = {setIsOpen} 
        description = {description}
        value = {value}
        setDescription = {setDescription}
        setValue = {setValue}
        isExpense = {isExpense}
        setIsExpense = {setIsExpense}/>
    </Container>
  );
}

export default App;

var initialEntries = [{
  id:1,
  description : "Work income",
  value : 3000,
  isExpense : false
},
{
  id:2,
  description : "Water bill",
  value : 20,
  isExpense : true
},
{
  id:3,
  description : "rent",
  value : 300,
  isExpense : true
},

  {
    id:4,
    description : "power billnt",
    value : 50,
    isExpense : true
  }

]
