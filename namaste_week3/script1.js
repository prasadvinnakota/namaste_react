import ReactDOM from "react-dom/client"
import React from "react"
import { FaUserCircle } from "react-icons/fa";

// <div className = "title">
// <h1></h1>
// <h2></h2>
// <h3></h3>
// </div>

// const heading1 = React.createElement("h1", {}, "heading1")
// const heading2 = React.createElement("h2", {}, "heading2")
// const heading3 = React.createElement("h3", {}, "heading3")


// const container  = React.createElement("div", {className:"title"}, [heading1, heading2, heading3])

// const container = (
//     <div className="title">
//         <h1>Heading1</h1>
//         <h1>Heading2</h1>
//         <h1>Heading3</h1>
//     </div>
// )
// const Title = ()=>
// {
//     return(
//         <h1>Namaste React</h1>
//     )
// }
// const HeaderComponent = () => {
//     return (
//         <div className="title">
//             {<Title></Title>}
//             <h1 className="heading1" key={1234}>Heading1</h1>
//             <h2 className="heading1" key={1235}>Heading2</h2>
//             <h3 className="heading1" key={123456}>Heading3</h3>
//         </div>
//     )

// }

const Logo = ()=>
{
    return(
        <img id="company-profile" src="data:image/jpeg;base64,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" alt="LOGO"/>
    )
}

const SearchComponent = ()=>
{
    return(
        <React.Fragment>
        <input type="search" id="searchcomponent" placeholder="Search here"/>
        </React.Fragment>
    )

}

const UserIcon = ()=>
{
    return(
        <span id="userIcon">
        <FaUserCircle/>
        </span>
    )
}

const HeaderComponent = () => {
    return (
        <div className="container" id="container">
           <Logo/>
           <SearchComponent/>
           <UserIcon/>
        </div>
    )

}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>)

