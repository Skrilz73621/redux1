import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function MainPage() {

    const dispatch = useDispatch()
    const currentValue = useSelector(state => state.currentValue)
    
    const plusOne = () =>{
        dispatch({
            type:'PLUS_ONE',
            payload: currentValue + 1
        })
    }

    const minusOne = () =>{

        if (currentValue > 0){
            dispatch({
                type:'MINUS_ONE',
                payload: currentValue - 1
            })
        }else{
            dispatch({
                type:'MINUS_ONE',
                payload: currentValue
            })
        }

    }

    const plusTen = () =>{
        dispatch({
            type:'PLUS_TEN',
            payload: currentValue + 10
        })
    }
    
    const reset = () =>{
        dispatch({
            type:'RESET',
            payload: currentValue * 0
        })
    }


    const minusTen = () =>{

        if (currentValue >= 10){
            dispatch({
                type:'MINUS_TEN',
                payload: currentValue - 10
            })
        }else{
            dispatch({
                type:'MINUS_TEN',
                payload: currentValue
            })
        }

    }


  return (
    <div className='container'>
        {currentValue}
        <button onClick={plusOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={plusTen}>+10</button>
        <button onClick={minusTen}>-10</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}
