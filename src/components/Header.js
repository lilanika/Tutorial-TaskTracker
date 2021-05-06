import React from 'react'
import Button from './Button'

const Header = ({ title , toggleButton, showAdd}) => {

  return (
    <header className="header">
      <h1>{title}</h1>
   <Button 
   color={showAdd ? 'pink' : 'green'}
   text={showAdd ?'Close' : 'Add'} 

   onClick={toggleButton} />
    </header>
  )
}





export default Header