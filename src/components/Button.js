import React from "react"

export function Button(props) {
  return (
      <button className={`button button__${props.styleType}`}>
        {props.children}
      </button>
  )
}
