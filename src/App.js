import React, {useState} from 'react';
import {Tax, Budget, Chart} from './Components'

const App = () => {
    const [salary, Setsalary] = useState('');
    const [taxRate, setTaxRate] = useState('');
    const [wantsBudget, setWantsBudget] = useState('');
    const [needsBudget, setNeedsBudget] = useState('');
    const [savingsBudget, setSavingsBudget] = useState('');


    const taxFormula =  salary*(taxRate/100);
    const wantsFormula =  (salary - taxFormula)*(wantsBudget/100);
    const needsFormula =  (salary - taxFormula)*(needsBudget/100);
    const savingsFormula =  (salary - taxFormula)*(savingsBudget/100);

    const totalBudget = parseInt(wantsBudget) + parseInt(needsBudget) + parseInt(savingsBudget);

    return (
        <div >
        <input className='styles.salary' type='text' placeholder="Enter Earnings Per Year" value={salary} onChange={(e) => Setsalary(e.target.value)}/>
        <Tax taxRate={taxRate} setTaxRate={setTaxRate} />
        <Budget 
            wantsBudget={wantsBudget} setWantsBudget={setWantsBudget} 
            needsBudget={needsBudget} setNeedsBudget={setNeedsBudget}
            savingsBudget={savingsBudget} setSavingsBudget={setSavingsBudget}
        />
        <button onClick={ () => {
                if(totalBudget === 100){
                    console.log(salary, totalBudget, wantsFormula)
                }else{
                    alert(`current budget is ${totalBudget}. Wants, needs and savings must add up to be 100`)
                }
            }}
        >CALCULATE BUDGET</button>
        
        <Chart salary={parseInt(salary)} totalBudget={totalBudget}wantsFormula={wantsFormula} needsFormula={needsFormula} savingsFormula={savingsFormula} taxFormula={taxFormula}/>
    </div>
        )
    }
    
    export default App;

// STEPS
// 1)figure out how to pass all the Data
// 2)find an api, if i cant create a data component
// 3)on click, we need to send the data to the chart component. in this case, the data would be the amount of each salary based on their percentage
//4) create a data component for the chart
//4) need to set a limit on budget input so that the total has to equal 100%
//QUESTIONS
//-why do we need a callback function for the onClick?
// ISSUES
//how do i pass the value of my input in different components back to the API? They are currently states
// finding an approrpiate tax API
// onclick, run the calculations. figure


