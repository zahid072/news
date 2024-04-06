import React from 'react'
import LeftNav from '../LeftNav/LeftNav'
import News from '../news/News'
import RightNav from '../RightNav/RightNav'

const CategoryNews = () => {
  return (
    <>
    <div className='grid grid-cols-4'>
      <div className='col-span-1 '>
        <LeftNav/>
      </div>
      <div className='col-span-2'>
        <News/>
      </div>
      <div className='col-span-1 border'>
        <RightNav/>
      </div>
    </div>
      
    </>
  )
}

export default CategoryNews
