import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import {choice} from './levelFourSlice'


function LevelFour() {


const dispatch = useDispatch()
const [decisionOne, setDecisionOne] = useState()

  return (
    <div>
       Obs: Competitor Introduces?
        <select onChange={(e)=>setDecisionOne(e.target.value)}>
        <option/>
            <option type='text' value='comp introduces'>Competitor Introduces</option>
            <option type='text' value='comp does not introduce'>Comp does not introduce</option>
        </select>
      
        <button onClick={()=>dispatch(choice(decisionOne))}>Submit</button>
    
        
    </div>
  )
}

export default LevelFour