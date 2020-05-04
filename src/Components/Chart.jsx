/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import {Doughnut} from 'react-chartjs-2';
import styles from './Chart.module.css'

const Chart = ({salary,totalBudget, wantsFormula, needsFormula, savingsFormula, taxFormula}) => {
    const [click, setClick] = useState(false)
    const data =  {
        labels: [
            'Wants',
            'Needs',
            'Savings',
            'Tax',
        ],
        datasets: [{
            data: [wantsFormula, needsFormula, savingsFormula, taxFormula],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#CC99FF'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#CC99FF'
            ]
        }]
    };
    

    return (
        <>
        <button onClick={()=>{
            totalBudget === 100?(
               setClick(true) && console.log('works')
            ) : console.log('fail')
        }}
        >CALCULATE BUDGET</button>
        {click?(
            <Doughnut className={styles.doughnutGraph}data={data}/>
        ):console.log('no click')}
        </>
    )
}
    
    export default Chart;
    
                // if(totalBudget === 100){
                //     // console.log(salary, totalBudget, wantsFormula)
                //     <Doughnut data={data}/>
                // }else{
                //     alert(`current budget is ${totalBudget}. Wants, needs and savings must add up to be 100`)
                // }