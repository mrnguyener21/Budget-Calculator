import React from 'react';

const Category = ({wantsBudget, setWantsBudget, needsBudget, setNeedsBudget, savingsBudget, setSavingsBudget}) => {
    return(
        <div>
            <input type='text' placeholder='Wants' value={wantsBudget} onChange={(e)=> setWantsBudget(e.target.value)} />
            <input type='text 'placeholder='Needs' value={needsBudget} onChange={(e)=> setNeedsBudget(e.target.value)} />
            <input type='text 'placeholder='Savings' value={savingsBudget} onChange={(e)=> setSavingsBudget(e.target.value)} />
        </div>
    )
}

export default Category;