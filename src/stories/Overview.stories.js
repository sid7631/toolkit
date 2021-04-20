import React from 'react';

import Overview from '../docs/Overview';

import Provider from './Provider';

// import { Provider } from 'react-redux';
import store from '../store';

export default {
    component:Overview,
    title:'Overview',
    decorators:[
        (Story) => (
            <Provider story={Story()} />
        )
    ]
};

const Template = args => <Overview {...args} />;


export const First = Template.bind({});

First.args = {
    count:1,
}