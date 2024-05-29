// "use client"
// import React, { useState } from 'react'
// import Header from '@/Components/Header'


// const page = () => {
//   const [user, setUser] = useState("Taksha");
//   return (
//     <>
//     <Header user = {user}/>
//     {user}
//     </>
//   )
// }

// export default page

"use client"
import React, { useState } from 'react'
import axios from 'axios'

const page = () => {
  const [images, setImages] = useState([]);
  const getImages = async () =>{
   try{
    const response = await axios.get("https://picsum.photos/v2/list")
    const data = response.data
    
    setImages(data)
   }
   catch (error){
    console.log("error fetching images")
   }
  }

  return (
    <div>
      <button onClick={getImages} className='px-5 py-5 bg-green-600 text-white font-bold'>Get Images</button>
      <div className='p-10'>
            {images.map((elem, i)=>{
              return <img key={i} src={elem.download_url} width={300} height={300} className='m-10 rounded inline-block'/>
            })}
      </div>
    </div>
  )
}

export default page


