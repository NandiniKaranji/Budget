import React  from 'react';
import { Form , Segment} from'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import EntryForm from './EntryForm';

function NewEntryForm ({addEntry , 
                        description , 
                        value , 
                        isExpense , 
                        setDescription , setValue , setIsExpense}) {
  
    return(
        <Form unstackable>
        <EntryForm 
        description = {description}
        value = {value}
        setDescription = {setDescription}
        setValue = {setValue}
        isExpense = {isExpense}
        setIsExpense = {setIsExpense}/>
        <ButtonSaveOrCancel addEntry = {addEntry} description = {description} value = {value} isExpense = {isExpense}></ButtonSaveOrCancel>
      </Form>
    )
}

export default NewEntryForm;