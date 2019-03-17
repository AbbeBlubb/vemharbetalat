import React from "react"

export function Header(props) {
  const Level = props.level
  return (
      <Level
        className='header'
        style={{textAlign: props.textAlign}}>
        {props.children}
      </Level>
  )
}
