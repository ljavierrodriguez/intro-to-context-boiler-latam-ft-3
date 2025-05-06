import React, { useEffect } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'

const Contact = () => {

    const { store, dispatch } = useGlobalReducer()

    const addTask = () => {
        console.log("hola")
        dispatch({ type: 'add_task', payload: { id: 100, color: '#cd45d3' } })
    }

    const getTasks = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')

            const data = await response.json()

            dispatch({ type: 'list_tasks', payload: data })

        } catch (error) {
            console.log(error)    
        }
    }

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <>
            <h1>Contact</h1>
            <p>{store.name}</p>
            <button onClick={addTask}>Crear Tarea</button>
        </>
    )
}

export default Contact
