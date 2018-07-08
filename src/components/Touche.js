import React from 'react'

const Touche = props => {
  return(
    <React.Fragment>
      <button className='w-25' value={props.touche} onClick={props.recupTouches}>{props.touche}</button>
    </React.Fragment>
  )
}

export default Touche
