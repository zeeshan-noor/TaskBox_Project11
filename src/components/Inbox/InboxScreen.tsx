import React from 'react'
// import PropTypes from "prop-types";
import TaskList from "../TaskList/TaskList";
import {TaskInterface} from "../Task/Task"
import {useSelector} from "react-redux"

const InboxScreen = ({error}:any) => {
    const returnState = useSelector((state:TaskInterface[]) => (state))        
    console.log(returnState)
    if (error){
        return (
            <div className="page lists-show">
                <div className="wrapper-message">
                    <span className = "icon-face-sad">
                        <div className="title-message">Oh No!</div>
                        <div className="subtitle-message">Something went wrong</div>
                    </span>
                </div>
            </div>
        );
    };
    return (
        <div className = "page lists-show">
            <nav>
                <h1 className = "title-page">
                    <span className = "title-wrapper">Taskbox</span>
                </h1>
            </nav>
            <TaskList tasks = {returnState} loading = {false} />
        </div>
    )
}

export default InboxScreen
