import { async } from '@firebase/util';
import {useState, useEffect}from 'react';
import {projectStorage, projectFirestore, timeStamp} from '../firebase/firebase';

import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import { collection, setDoc, doc, addDoc} from 'firebase/firestore';

const useStorage = (file)=>{
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl]= useState(null);

  useEffect (()=>{
  const storageRef = ref(projectStorage, file.name);

  const uploadImage = uploadBytesResumable(storageRef, file);

  // const collectionRef = doc(collection(projectFirestore, 'images'));
  const collectionRef = collection(projectFirestore, 'images');
  
  uploadImage.on('state_changed', (snap)=>{
    const percentage = (snap.bytesTransferred / snap.totalBytes) * 100
    setProgress(percentage);
  }, (err) =>{
    setError(err);
  }, async() =>{    
    const url = await getDownloadURL(storageRef);
    const createdAt = timeStamp;

    // setDoc(collectionRef, {url, createdAt});   
    addDoc(collectionRef, {url, createdAt});
    setUrl(url);

  });
  },[file]);

  return { progress, url, error}
}


export default useStorage;