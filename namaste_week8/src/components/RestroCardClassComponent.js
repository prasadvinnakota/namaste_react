import React from "react"
class RestroCardClassComponent extends React.Component
{
   constructor(props)
   {
       console.log("hi")
       super(props)
       console.log(this.props) // we need super(props) to get access this. if this is not there we cant initialize state
   }
   
   async componentDidMount(){
       console.log("child")
       
   }

  

   render()
   {
       
       return(
           <h1>{this.props.data}</h1>
        
       )
   }
}

export default RestroCardClassComponent; 