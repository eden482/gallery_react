import React, { useEffect } from 'react'

import useStorage from '../hooks/useStorage'
import{motion} from 'framer-motion';

export const Progress = ({file, setFile}) => {
  const {url, progress} = useStorage(file);


  useEffect(()=>{
    if(url){
      setFile(null);
    }
  },[url, setFile])

  return (
    <motion.div className='container mx-auto h-[5px] rounded-full mt-5 bg-[#cce3de]' initial={{width:0}} animate={{width:progress + '%'}}>
    </motion.div>
  )
}
