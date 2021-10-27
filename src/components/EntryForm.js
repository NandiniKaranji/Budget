import React, { Fragment } from 'react';
import { Checkbox, Form, FormGroup, Segment } from 'semantic-ui-react';

function EntryForm ({description , value , setDescription , setValue , isExpense , setIsExpense}) {
    return(
        <Fragment>
        <FormGroup>
          <Form.Input
          icon='tags'
          width={12}
          label='Description'
          placeholder= 'New shinny thing'
          value = {description}
          onChange = {(event) => setDescription(event.target.value)}
         >            
          </Form.Input>
          <Form.Input
          icon='dollar'
          width={4}
          label='Value'
          placeholder= '100.00'
          value = {value}
          onChange = {(event) => setValue(event.target.value)}>            
          </Form.Input>
        </FormGroup>
        <Segment compact >
          <Checkbox
            label = 'Is Expense'
            toggle
            //checked = {isExpense}
            onChange = {() => setIsExpense(!isExpense)}
            >
          </Checkbox>
        </Segment>
        </Fragment>
    )
}

export default EntryForm;