import React from 'react'

import{motion} from 'framer-motion';

export const Modal = ({selectedImg, setSelectImg}) => {
  const closeHandle = (e)=>{
    if(e.target.classList.contains('back'))
    {setSelectImg(null)}
  }
  return (
    <motion.div onClick={closeHandle} className='back fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]' 
    initial={{opacity:0}}
    animate={{opacity:1}}
    
    
    >
   
     <motion.img className='block max-w-[60%] max-h-[80%] my-16 mx-auto border-4 border-white shadow-slate-100' src={selectedImg} alt=''
     initial={{y: "100vh"}} 
     animate={{y:"0"}}
     transition={{delay:.5, y:{duration:1}}}

     
     />
    </motion.div>
  )
}
