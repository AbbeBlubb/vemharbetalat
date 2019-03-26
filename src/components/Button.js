import React from "react"

export function Button(props) {
  return (
      <button
          className={`button button__${props.styleType} ${props.rippleEffect ? 'waves-effect waves-light-gray' : ''}`}
          onClick={props.onClick}>
        {props.children}
      </button>
  )
}
