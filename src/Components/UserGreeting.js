import React, {useState}  from 'react'

const UserGreeting = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    return isLoggedIn? (<div><h1>Welcome Noor Khan</h1> </div>):(<div> <h1>Welcome Guest</h1></div>)

    // if(isLoggedIn) {
    // return (
    //     <div>
    //         <h1>Welcome Noor Khan</h1>
    //     </div>
    // )
    // }else{
    //     return (
    //         <div>
    //             <h1>Welcome Guest</h1>
    //         </div>
    //     )  
    // }
}

export default UserGreeting
