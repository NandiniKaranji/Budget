import React from 'react';
import {Statistic, StatisticLabel, StatisticValue} from 'semantic-ui-react';

function DisplayBalance ({title , value , color = 'black' , size = 'tiny'}){
    return(
        <Statistic size='tiny' color= {color} size = {size}>
        <StatisticLabel style = {{textAlign : 'center'}}>{title} : </StatisticLabel>
        <StatisticValue>{value}</StatisticValue>
      </Statistic>
    )
}

export default DisplayBalance;