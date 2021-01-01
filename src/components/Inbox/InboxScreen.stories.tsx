import React from 'react';
import {Provider} from "react-redux"
import {action} from "@storybook/addon-actions";
import InboxScreen from "./InboxScreen"
import * as TaskListStories from '../../stories/TaskList.stories'

const store:any = {
    getState: () => {
        return {
                tasks : TaskListStories.Default.args?.tasks,
        };
    },
    subscribe : () => 0,
    dispatch : action('dispatch')
};

export default {
    component: InboxScreen,
    decorators : [(story: () => React.ReactNode) => <Provider store = {store} >{story()}</Provider>],
    title : "InboxScreen"
};

const Template = (args: any) => <InboxScreen {...args} />;

export const Defualt = Template.bind({});

