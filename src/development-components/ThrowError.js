import React from 'react'

export default function ThrowError() {
  throw new Error('This error was intentionally thrown for testing.')
  return (
    <div>
      Wheee! You should never see this.
    </div>
  )
}
