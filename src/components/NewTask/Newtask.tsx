import React , {useState} from 'react'
import {useDispatch} from "react-redux"
import { add } from '../../store/TaskSlice'
const Newtask = () => {
    const dispatch = useDispatch()

    const [input , setInput] = useState<string>("")


    const handleSubmit = () => {
        if(input === ""){
            dispatch(add({input:"Title is Required"}))
        }
        else {
            dispatch(add({input}))
        }
    }

    return (
        <div className = "new_task">
        
            <input type="text" value = {input}  onChange = {(e:React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}   />
       
          <button className = "add_button"  onClick = {handleSubmit} >Add Task</button>
     
        </div>
    )
}

export default Newtask
