import React from 'react';



const getDeatails = async (id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    return data;
}

const Details =async ({params}) => {
    const { id } = params; 
    const postDetails = await getDeatails(id);
    return (
        <div>
            <div className="card bg-base-100 w-full lg:w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{postDetails?.title}</h2>
    <p>{postDetails?.body}</p>
   
  </div>
</div>
        </div>
    );
};

export default Details;