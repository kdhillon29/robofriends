import React from 'react'
import Card from './card';

const Cardlist = ({robots})=>{

     const handleclick= (robo)=>{
              console.log(`clicked by ${robo.username}`);
              alert(`clicked by ${robo.username}`);
      }

         return(
               <div className=" flex flex-wrap justify-center mt2 "> 
         { robots.map((robot,i)=> <Card handleclick={handleclick} key={i} robo={robot} />) }
               
               </div>
         )

}

export default Cardlist;