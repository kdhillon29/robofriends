import React, { PureComponent } from 'react';


const Card = ({robo,handleclick})=>{

        return(
     

 <article onClick={()=>handleclick(robo)} id ={robo.id} className="  bg-green ml3 mb2 br3 pa4 grow ">
         <div className="tc">
 <img src={`http://robohash.org/id=${robo.id}/100+100`}
  className="br-100 h4 w4 dib ba b--black-05 pa2" 
  title="Photo of a kitty staring at you" />
    <h2 className="f3 mb1">{robo.username}</h2>
    <h3 className="f5 fw4 white mt0">{`${robo.name}`}</h3>
    <h3 className="f5 fw4 white mt0">{`${robo.email}`}</h3>
  </div>
   </article>
   
)

}

export default Card;