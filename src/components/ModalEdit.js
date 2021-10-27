import React from 'react';
import { Modal ,Button} from 'semantic-ui-react';
import EntryForm from './EntryForm';
import NewEntryForm from './NewEntryForm';

function ModalEdit({isOpen , 
                    setIsOpen ,
                    description , 
                    value, 
                    setDescription , 
                    setValue, 
                    setIsExpense ,
                    isExpense} ) {
    return (
        <Modal open = {isOpen }>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
            {/* setIsOpen<Modal.Description>Something Here</Modal.Description> */}
           <EntryForm 
            description = {description}
            value = {value}
             setDescription = {setDescription}
            setValue = {setValue}
            isExpense = {isExpense}
            setIsExpense = {setIsExpense}/>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick = {() => setIsOpen(false)}>Save</Button>
                <Button onClick = {() => setIsOpen(false)}>Close</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit;