import React from 'react'

import useFireStore from '../hooks/useFireStore'
import {motion} from 'framer-motion';

export const ImageList = ({setSelectImg}) => {

  const{docs} = useFireStore('images');
  console.log(docs);

  return (
    <div className='w-[80vw] mx-auto mt-10 grid grid-cols-2 sm:grid-cols-3 gap-10' >
    
      {docs && docs.map((doc)=>(
        <motion.div onClick={()=>setSelectImg(doc.url)} key={doc.id}
        layout
        whileHover = {{opacity:1}}
        className="overflow-hidden 
                    relative 
                    py-[50%] 
                    px-0 
                    h-0 
                    opacity-80"
                    >
          <motion.img className="absolute 
                          top-0 
                          left-0 
                          min-w-full 
                          min-h-full 
                          object-cover" 
                src={doc.url} 
                alt="uploaded pic"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1}}
          />
        </motion.div>

  ))}
   
    </div>
  )
}
