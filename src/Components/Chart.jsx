import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import styles from './Budget.module.css'

const Chart = ({salary,totalBudget, wantsFormula, needsFormula, savingsFormula, taxFormula}) => {
    // const salaryData = [{name:'Salary',value:salary}] 
    // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    // const budget = [
    //     {name:'Wants',value:wantsFormula},
    //     {name:'Needs',value:needsFormula},
    //     {name:'Savings',value:savingsFormula},
    //     {name: 'Tax', value:taxFormula}

    // ];

    const data =  {
        labels: [
            'Wants',
            'Needs',
            'Savings'
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



    return(
        totalBudget === 100?(
            <div>
                <Doughnut data={data}/>
            </div>

        ):null
    )
}

export default Chart;