import React from 'react';
import {PieChart, Pie} from 'recharts'

const Chart = ({totalBudget, wantsFormula, needsFormula, savingsFormula, taxFormula}) => {
    const budget = [
        {name:'Wants',value:wantsFormula},
        {name:'Needs',value:needsFormula},
        {name:'Savings',value:savingsFormula},
        {name: 'Tax', value:taxFormula}

    ];
    // const data02 = [
    //     {name:'Wants',value:wantsFormula},
    //     {name:'Needs',value:needsFormula},
    //     {name:'Savings',value:savingsFormula}

    // ];

    
    return(
        totalBudget === 100?(
        <PieChart width={730} height={250}>
        {/* <Pie data={budget} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" /> */}
        <Pie data={budget} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        <Pie data={budget} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart>
        ):null
    )
}

export default Chart;