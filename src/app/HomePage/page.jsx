import Link from 'next/link';
import React from 'react';




const getPost = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
    return data;
}

const HomePage = async () => {
    const postData = await getPost();
    return (
        <div>
            
            <div className='grid lg:grid-cols-5'>
                {
                    postData?.slice(0,20)?.map(post=>(
                        <div key={post.id} className="card bg-base-100 w-full lg:w-60 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Title : {post.title}</h2>
    
    <div className="card-actions justify-end items-end bottom-0">
      <button className="btn btn-primary"><Link href={`/HomePage/${post.id}`}>View Details</Link></button>
    </div>
  </div>
</div>
                    ))
                }
            </div>
        </div>
    );
};

export default HomePage;