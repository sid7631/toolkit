import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {count_increment, count_decrement} from '../actions/demoActions';


function Overview({count, count_increment, count_decrement}) {
    return (
        <div>
            Docs Overview
            checking in material ui working
            <p>{count}</p>
            <Button variant="contained" color="primary" onClick={()=> count_increment()}>
                ADD COUNT
            </Button>
            <Button variant="contained" color="secondary" onClick={()=> count_decrement()}>
                DECREASE COUNT
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count:state.demoReducer.count,
})

Overview.propTypes = {
    count: PropTypes.number,
    count_increment: PropTypes.func.isRequired,
    count_decrement: PropTypes.func.isRequired,
};

export default connect(mapStateToProps,{ count_increment, count_decrement })(Overview)