import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from "../Reducer/countReducer"
function Count(props) {
    return (
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.decrement}>-</button>
            <button onClick={props.increment}>+</button>
        </div>
    )
}


export default connect(state => ({count: state}), {increment, decrement})(Count) 
