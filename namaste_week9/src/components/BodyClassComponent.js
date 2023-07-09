import Shimmer from "./Shimmer"
import RestroCard from "./RestrCard"
import React from "react"
import RestroCardClassComponent from "./RestroCardClassComponent"
class BodyClassComponet extends React.Component
{
    constructor(props)
    {
       super(props)
       console.log(this.componentDidMount)
       this.state ={
           data:[],
           count:0
       }
    }

    async componentDidMount()
    {
        console.log("last")

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        this.setState({data:json?.data?.cards[2]?.data?.data?.cards})
        this.timer = setInterval(()=>
       {console.log("rama")}, 1000) 
        
    }
    componentDidUpdate(prevProps, prevState)
    {
        if(prevState.count !== this.state.count){
        console.log(prevState,this.state, prevProps)    
        console.log("hi")
        }
    }

    componentWillUnmount()
    {
        clearInterval(this.timer)
        console.log("hi")
    }

    render()
    {
        return (
            <>
            <h1>{console.log(this.state.data)}</h1>
            {this.state?.data?.map((res)=>
            {
                return(<RestroCardClassComponent key={res.data.id} data={res.data.id}/>)
            })}
            </>
        )
    
    }
}

export default BodyClassComponet;