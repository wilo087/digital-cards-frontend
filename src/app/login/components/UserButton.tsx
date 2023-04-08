'use client'
import Button from '@material-ui/core/Button'
import React from 'react'

export default function UserButton (): React.ReactElement {
  return (
    <Button color='primary' onClick={() => console.log('testing')}>Button</Button>
  )
}
