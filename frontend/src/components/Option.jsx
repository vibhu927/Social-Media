import React from 'react'

export const Option = ({text}) => {
  return (
    <div className='flex bg-blue-600 text-white m-1 py-2 rounded  justify-center' style={{ flex: '1' }}>
        <span>{text}</span>
    </div>

  )
}
