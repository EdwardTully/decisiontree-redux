import React from 'react'
import { useDispatch} from 'react-redux'
import {choiceAB} from './decABSlice'


function ChoiceAB() {


const dispatch = useDispatch()

  return (
    <div>
       DP: Authorize or Kill Project?
        <select onChange={(e)=>dispatch(choiceAB(e.target.value))}>
        <option/>
            <option type='text' value='authorize'>Authorize Project</option>
            <option type='text' value='kill'>Kill Project</option>
        </select>
      

    
        
    </div>
  )
}

export default ChoiceAB