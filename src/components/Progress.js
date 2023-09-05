import React from 'react'
import {useSelector} from 'react-redux'

function Progress() {
    const choiceAorB = useSelector((state)=>state.optionAB.choice)
    const choiceA12 = useSelector((state)=>state.optionA.choiceA)
    const choiceB12 = useSelector((state)=>state.optionB.choiceB)


  return (
    <div>
        <div>Level 1: {choiceAorB}</div>
        <div>Level 2: {choiceA12 + choiceB12}</div>
        <div>Level 3: {}</div>
        <div>Level 4: {}</div>
        <div>Level 5: {}</div>
    </div>
  )
}

export default Progress