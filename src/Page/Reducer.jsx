import React, { useReducer } from 'react'

export default function Reducer() {
  const InitialState = {count:0,name:'Russ'};
  const reducer=(state,action)=>{
    switch(action.type){
      case 'reset':
        return InitialState;
      case 'increment':
        return {count:state.count+1,name:'Dev'};
      case 'decrement':
        return {count:state.count-1,name:'Main'};
        
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <div>
      Count:{state.count}
      Name:{state.name}

      <button onClick={()=>dispatch({type:'decrement'})}>-</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
      <button onClick={()=>dispatch({type:'increment'})}>+</button>
    </div>
  )
}
