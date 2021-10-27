import React, { Fragment, useState } from 'react';
import {   Container, Grid, GridColumn, GridRow, Icon, Segment } from 'semantic-ui-react';
import ModalEdit from './ModalEdit';

function EntryLine({id ,
                   description , 
                   value , 
                   isExpense = false , 
                   deleteEntry ,
                   editEntry
                  }){
 
    return (
   <Fragment>
    <Segment textAlign='center' color= {isExpense ? 'red' : 'green'}>
    <Grid columns={3}>
      <GridRow>
        <GridColumn width={10} textAlign='left'>{description}</GridColumn>
        <GridColumn width={3} textAlign="right">{value}</GridColumn>
        <GridColumn width={3}>
          <Icon name='edit' bordered onClick = {() => editEntry(id)}></Icon>
          <Icon name='trash' bordered onClick = {() => deleteEntry(id)} ></Icon>
        </GridColumn>
      </GridRow>
    </Grid>

</Segment>

</Fragment>
    )
}

export default EntryLine;