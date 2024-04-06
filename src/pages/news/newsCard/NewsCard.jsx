import React from 'react'
import { Link } from 'react-router-dom';
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";

const NewsCard = ({news}) => {
    const {author, _id} = news;
  return (
   <div className='mb-5 rounded-md border'>
     <div className='bg-slate-200 flex justify-between items-center p-2'>
      <div className='flex gap-2 items-center'>
        <img className='size-10 rounded-full' src={author.img} alt="" />
        <ul>
            <li>
                <p className='font-bold text-xl'>{author.name}</p>
            </li>
            <li>
                <p>{author.published_date}</p>
            </li>
        </ul> 

        <Link to={`/news/${_id}`} className='text-blue-500 font-semibold underline'>See More</Link>
      </div>
      <div className='flex gap-3'>

            <FaRegBookmark/>
            <IoShareSocialOutline/>

      </div>
    </div>
   </div>
  )
}

export default NewsCard
