import React from 'react';

import Overview from '../docs/Overview';

import Provider from './Provider';

// import { Provider } from 'react-redux';
import store from '../store';

export default {
    component:Overview,
    title:'Overview',
    argTypes:{

    },
    decorators:[
        (Story) => (
            <Provider story={Story()} />
        )
    ],
    controls: { expanded: true },
};

const Template = args => <Overview {...args} />;


export const First = Template.bind({});

First.args = {

}