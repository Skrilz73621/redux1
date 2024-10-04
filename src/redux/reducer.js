import React from 'react'

const initialState = {
    currentValue : 0
}

export default function reducer(state=initialState, action) {

    if(action.type === 'PLUS_ONE'){
        return{
            currentValue: action.payload
        }
    }else if(action.type === 'MINUS_ONE'){
        return{
            currentValue: action.payload
        }
    }else if(action.type === 'PLUS_TEN'){
        return{
            currentValue: action.payload
        }
    }else if(action.type === 'MINUS_TEN'){
        return{
            currentValue: action.payload
        }
    }else if(action.type === 'RESET'){
        return{
            currentValue: action.payload
        }
    }


    return state
}
