import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from "./Spinner";
import "./Blogs.css";
export const Blogs = () => {
  //consuming
  const {loading,posts}=useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[450px]  mt-[66px] mb-[70px] flex flex-col gap-y-7'>
      {
        loading?  (<Spinner/>): (
          posts.length===0 ? 
          (<div>
            <p>No posts found</p>
          </div>) :
           (posts.map((post) => (
            <div key={post.id}>
              <p className='font-bold text-lg'>{post.title}</p>
              <p className='text-sm mt-[4px]'>
                By <span className='italic'>{post.author}</span>on <span>{post.category}</span>
              </p>
              <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
              <p className='text-sm mt-[4px]'>{post.content}</p>
              <div>
                {post.tags.map( (tag,index) => {
                  return <span key={index} className="text-blue-700 underline font-bold text-xs mt-[5px]">{`#${tag}`}</span>
                })}
              </div>
            </div>
           )))
        )
      }
    </div>
  )
}
export default Blogs