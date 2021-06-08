import React from 'react'
import Person from './Person'

const PersonList = () => {

    const persons = [
        {
            'id': 1,
            'name': 'Oyshi',
            'age': 21,
            'skill': 'Java'
        },
        {
            'id': 2,
            'name': 'Noor',
            'age': 32,
            'skill': 'React'
        },
        {
            'id': 3,
            'name': 'Rabbani',
            'age': 18,
            'skill': 'JavaScript'
        },
        {
            'id': 4,
            'name': 'Sani',
            'age': 21,
            'skill': 'Python'
        }
    ]

    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return (
        <div>{personList}</div>
    )
}

export default PersonList
