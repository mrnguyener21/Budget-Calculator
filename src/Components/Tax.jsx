import React from 'react';
const Tax = ({taxRate, setTaxRate}) => {
    return(
        <div>
            <input type='text' placeholder='taxrate' value={taxRate} onChange={(e)=> setTaxRate(e.target.value) } />
        </div>
    )
}
export default Tax

