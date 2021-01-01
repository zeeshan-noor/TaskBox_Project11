import React from "react";
import TaskList from "../components/TaskList/TaskList";
import {TasksListProps} from "../components/TaskList/TaskList" 
import { Story } from '@storybook/react/types-6-0';
import * as TaskStories from "./Task.stories"

export default {
    component : TaskList,
    title : 'TaskList',
    decorators : [(story: () => React.ReactNode) => <div style = {{padding : "3rem"}}>{story()}</div>]
}

 const Template:Story<TasksListProps> = (args) => <TaskList  {...args} />;

export const Default = Template.bind({});

Default.args = {
    tasks : [
        {...TaskStories.Default.args?.task , id: "1" , title : "Task1", state : "TASK_INBOX"},
        {...TaskStories.Default.args?.task , id: "2" , title : "Task2", state : "TASK_INBOX"},
        {...TaskStories.Default.args?.task , id: "3" , title : "Task3", state : "TASK_INBOX"},
        {...TaskStories.Default.args?.task , id: "4" , title : "Task4", state : "TASK_INBOX"},
        {...TaskStories.Default.args?.task , id: "5" , title : "Task5", state : "TASK_INBOX"},
        {...TaskStories.Default.args?.task , id: "6" , title : "Task6", state : "TASK_INBOX"},
    ]
        
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
    tasks : [
        {...TaskStories.Default.args?.task , id: "1" , title : "Task1", state : "TASK_INBOX" },
        {...TaskStories.Default.args?.task , id: "2" , title : "Task2", state : "TASK_INBOX" },
        {...TaskStories.Default.args?.task , id: "3" , title : "Task3", state : "TASK_INBOX" },
        {...TaskStories.Default.args?.task , id: "4" , title : "Task4", state : "TASK_INBOX" },
        {...TaskStories.Default.args?.task , id: "5" , title : "Task5", state : "TASK_INBOX" },
        {...TaskStories.Default.args?.task , id: "6" , title : "Task6", state : "TASK_PINNED"},

    ], loading : (false)
};

export const Loading = Template.bind({});
Loading.args = {
    tasks : [],
    loading : true
}

export const Empty = Template.bind({});
Empty.args = {
    ...Loading.args,
    loading : false
}





