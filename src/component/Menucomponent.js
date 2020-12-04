import React, { Component } from 'react'
import {connect} from 'react-redux'
import { buybooks } from '../redux';

function Menu(props) {
        return (
            <div>
                <h1>Order Books:{props.books}</h1>
                <button onClick ={ props.buybooks }>Click here</button>
            </div>
        )
    }

const Storetoprops = state =>{
    return{
        books:state.books
    }
}

const dispatchtoprops = dispatch =>{
    return{
        buybooks:function(){
            dispatch(buybooks())
        }
    }
}

export default connect (Storetoprops,dispatchtoprops)(Menu);




