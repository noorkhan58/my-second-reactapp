import React from 'react'

const Person = ({UsersList}) => {

    console.log(UsersList.name)
    return (
        <div>
            {/* <h1>I am {person.name}. I am {person.age} years old and I know {person.skill}</h1> */}

            <h1>I am {UsersList.address.city}</h1>
        </div>
    )
}

export default Person
