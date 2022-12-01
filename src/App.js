import { Title } from "./comps/Title";

import {UploadForm} from './comps/UploadForm.jsx'

import { ImageList } from "./comps/ImageList.jsx";
import { Modal } from "./comps/Modal.jsx";

import {useState} from 'react';

function App() {
  const[selectedImg, setSelectImg]= useState(null);
  return (
    <div className="App">
     
      <Title />
      <UploadForm />
      <ImageList setSelectImg={setSelectImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectImg={setSelectImg}/>}
    </div>
  );
}

export default App;
