import React from 'react'

const MoreButton = (props) => {
  console.log(props)
    return <button onClick={()=>props.moreSushis()}>
            More sushi!
          </button>
}

export default MoreButton
