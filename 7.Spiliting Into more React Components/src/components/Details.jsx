import React from 'react'

export default function Details(props) {
  return (
    <>
        <p className='info'>{props.telinfo || props.emailinfo} </p>
    </>
        
  )
}
