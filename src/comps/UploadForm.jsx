import React,{useState} from 'react'
import { Progress } from './Progress';

import {BsPlusCircleDotted} from 'react-icons/bs'

 
export const UploadForm = () => {

  const [file, setFile] = useState(null);
  const [error, setError]= useState(null);

  const types = ['image/png', 'image/jpeg','image/jpg'];

  const changeHandler = (e)=>{
    
    let selected = e.target.files[0]
    
    if(selected && types.includes(selected.type)){
      setFile(selected);
      setError('');
    } else{
      setFile(null);
      setError('Please select an image file (png/jpeg/jpg)');

    }

  }
  return (

    <form>
      <label >
        <input className='opacity-0 h-0 w-0' type="file" onChange={changeHandler} />
        <span className="font-bold"> 
        <BsPlusCircleDotted className='mx-auto my-5' color="#a4c3b2" fontSize= "3rem"/>
        </span>
      </label>
    
      
      <div className='text-center text-[#6b9080]'>
        {error && <div>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <Progress file={file} setFile={setFile} />}
      </div>
    
    </form>
    
  )
}
