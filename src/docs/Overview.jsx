import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {count_increment, count_decrement} from '../actions/demoActions';


function Overview(props) {
    return (
        <div>
            Docs Overview
            checking in material ui working
            <p>{props.count}</p>
            <Button variant="contained" color="primary" onClick={()=> props.count_increment()}>
                ADD COUNT
            </Button>
            <Button variant="contained" color="secondary" onClick={()=> props.count_decrement()}>
                DECREASE COUNT
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count:state.demoReducer.count,
})


export default connect(mapStateToProps,{ count_increment, count_decrement })(Overview)
