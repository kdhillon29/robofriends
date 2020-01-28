
import React from 'react';

class ErrorBoundary extends React.Component{
    
    constructor(props){
       super(props)
         this.state={
             haserror:false,

         }

    }
    componentDidCatch(error,info){
          this.setState({haserror:true});
    }

    render(){
              const {haserror} =this.state.haserror;
              return (
                     haserror? <h1>OOPS something wrong</h1>: this.props.children
                   
              )

    }

}




export default ErrorBoundary;