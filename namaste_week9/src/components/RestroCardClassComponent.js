import React from "react"
class RestroCardClassComponent extends React.Component
{
   constructor(props)
   {
       super(props)
       console.log(this.props) // we need super(props) to get access this. if this is not there we cant initialize state
   }
   
   async componentDidMount(){
       console.log(this.props)
       console.log("child")
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
       const json = await data.json()
       
   }

  

   render()
   {
       
       return(
           <h1>{this.props.data}</h1>
        
       )
   }
}

export default RestroCardClassComponent; 