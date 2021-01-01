import React from 'react'
import "../../index.css"
import {useDispatch} from "react-redux"
import { archiveTask, pinnedTask } from '../../store/TaskSlice';


export interface TaskInterface {
    id?: string
    title?: string
    state?: string
    updatedAt?: Date
}

export interface TasksProps {
    task: TaskInterface
  
}


const Task: React.FC<TasksProps> = ({ task: { id, title, state } }) => {
    const dispatch = useDispatch();

    console.log(state)
    return (
        <div className={`list-item ${state}`}  >
            <label className = "checkbox" >
                <input 
                type="checkbox" 
                defaultChecked = {state === "TASK_ARCHIVED"}
                disabled = {true}
                name = "checked"
                />
                <span className = "checkbox-custom" onClick = {() => dispatch(archiveTask(id)) }/>
            </label>
            <div className="title"  >
                <input type="text" value = {title} readOnly = {true} placeholder = "Input title" />
            </div>
            
            <div className="actions" onClick = {(event) => event.stopPropagation()} >
                {state !== "TASK_ARCHIVED" ? (
                    <a  href = "/" onClick = {() => dispatch(pinnedTask(id))}  >
                        <span  onClick = {(e) => {e.preventDefault()}} className = {`icon-star`} ></span>
                    </a>
                ):null}
            </div>
        </div>
    )
}



export default Task
