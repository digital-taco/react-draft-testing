import React from 'react'

export default function DefaultComponent({ propOne = 'Potato', propTwo }) {
  return <p>This component is the default export from this file.</p>
}

export function NamedComponent({ propOne = 'Prop One', propTwo = 'Prop Two' }) {
  return <p>This component is a named export from this file.</p>
}