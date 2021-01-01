
import React from 'react'
import Task, {TaskInterface} from "../Task/Task"
import "../../index.css"
import PropTypes from 'prop-types';


export interface TasksListProps {
    tasks : TaskInterface[]
    loading : boolean
    onPinTask? : any,
    onArchiveTask? : any
  
}

const TaskList:React.FC<TasksListProps> = ({tasks , loading , onPinTask , onArchiveTask}) => {
    const events = {
        onPinTask , 
        onArchiveTask
    }

    const LoadingRow = (
        <div className="loading-item">
            <span className = "glow-checkbox"/>
            <span className = "glow-text" >
            <span>Loading</span>
            <span>cool</span>
            <span>state</span>
            </span>
        </div>
    )

    if(loading){
        return (
        <div className = "list-items">
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
        </div>
        )
    }

    if(tasks?.length === 0){
        return(
            <div className = "list-items">
                <div className="wrapper-message">
                    <span className = "icon-check" />
                    <div className = "title-message" >You have no task</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>
        )
    }

    const TasksInOrder = [
        ...tasks.filter(t =>t.state === "TASK_PINNED" ),

        ...tasks.filter(t => t.state !== "TASK_PINNED"),
        
    ]

    
    return (
        <div className = "list-items">
            {TasksInOrder.map((task , i) => {
                return (
                    <div key = {i}>
                        <Task key = {i}  task = {task} {...events} />
                    </div>
                )
            })}
        </div>
    )
}

export default TaskList

TaskList.propTypes = {
    /** Checks if it's in loading state */
    // loading: PropTypes.bool,
    /** The list of tasks */
    // tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
    /** Event to change the task to pinned */
    onPinTask: PropTypes.func,
    /** Event to change the task to archived */
    onArchiveTask: PropTypes.func,
  };
  TaskList.defaultProps = {
    loading: false,
  };