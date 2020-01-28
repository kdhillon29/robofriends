import React from 'react'

const Searchbar = ({value,onChange}) =>{

        return(
            
    
            <div className="pa2 mt0">
      {/* <label for="name" className="f6 b db mb2">Name <span class="normal black-60">(optional)</span></label> */}
          <input id="name" value={value} onChange={onChange} placeholder="search "
           className=" pa2 ba b--green bg-lightest-blue w-50"
            type="text" aria-describedby="name-desc"/>

          </div>

        )






}
export default Searchbar; 