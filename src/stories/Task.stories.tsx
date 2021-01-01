import React from "react";
import Task from "../components/Task/Task"
import { Story } from '@storybook/react/types-6-0';
import {TasksProps} from "../components/Task/Task"

export default {
    component : {
        Task,
    } ,
    title : "Task",
}

const Template:Story<TasksProps> = (args) =>     <Task  {...args} />;

export const Default = Template.bind({})

Default.args = {
    task : {
        id :"1",
        title :  "Test Task",
        state : "TASK_INBOX",
        updatedAt : new Date(2020 , 11, 1, 9 , 0)
    }
}


export const Pinned = Template.bind({})
Pinned.args = {
    task : {
        ...Default.args.task,
        state : "TASK_PINNED"
    }
}

export const Archived = Template.bind({})
Archived.args = {
    task : {
        ...Default.args.task,
        state : "TASK_ARCHIVED"
    },
};



