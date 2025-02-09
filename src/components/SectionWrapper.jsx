import React, { Children } from 'react'

function SectionWrapper() {
  return (
    <div className='max-w-7xl mx-auto px-10'>{Children}</div>
  )
}

export default SectionWrapper