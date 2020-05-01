import React from 'react';
import {PieChart, Pie, Cell} from 'recharts'

const Chart = ({salary,totalBudget, wantsFormula, needsFormula, savingsFormula, taxFormula}) => {
    const budget = [
        {name:'Wants',value:wantsFormula},
        {name:'Needs',value:needsFormula},
        {name:'Savings',value:savingsFormula},
        {name: 'Tax', value:taxFormula}

    ];
    const salaryData = [{name:'Salary',value:salary}];
    
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return(
        totalBudget === 100?(
        <PieChart width={730} height={400}>
        <Pie data={salaryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} fill="#8884d8" label/>
        <Pie data={budget}  cx='50%' cy='50%' innerRadius={80} outerRadius={100}  fill="#8884d8" paddingAngle={5} label>                                                
        	{budget.map((budgetCategory, index) => <Cell fill={COLORS[index % COLORS.length]}/>)}
        </Pie>

        </PieChart>
        ):null
    )
}

export default Chart;