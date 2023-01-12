import React from 'react'
import "./ComingSoon.css"
import backimg from '../TS_images/FINAL.jpg'
import year from '../TS_images/2023.png'
// const back = new URL("./TS_images/home.png",import.meta.url)
function ComingSoon() {
  return (
    <>
    <div className='back-image'>
       <img src={backimg} alt=""/>
       {/* <div className='year-image'>
            <img src={year} />
       </div> */}
    </div>
   

    </>
  )
}

export default ComingSoon
