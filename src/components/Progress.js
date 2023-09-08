import React from 'react'
import {useSelector} from 'react-redux'

function Progress() {
    const lvlONe = useSelector((state)=>state.optionAB.choice)
    const lvlTwo = useSelector((state)=>state.optionTwo.choice)
    const lvlThree = useSelector((state)=>state.optionThree.choice)
    const lvlFour = useSelector((state)=>state.optionFour.choice)


  return (
    <div>
        <div>Level 1: {lvlONe}</div>
        <div>Level 2: {lvlTwo}</div>
        <div>Level 3: {lvlThree}</div>
        <div>Level 4: {lvlFour}</div>
     
    </div>
  )
}

export default Progress