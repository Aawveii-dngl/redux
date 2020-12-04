import {BUY_BOOKS} from './Type'

const initialState = {
    books:10
}

const bookReducer = (state=initialState,action) =>{
    switch(action.type){
        case BUY_BOOKS:return{
            ...state,
                books:state.books-1
        }
        default:return state;

    }
}

export default bookReducer
