import { onSnapshot, query, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

import { projectFirestore } from "../firebase/firebase";





const useFireStore = (coll)=>{
  const [docs, setDocs] = useState([]);

  useEffect(()=>{
    const q = query(collection(projectFirestore, coll));
    const unsub = onSnapshot(q, (querySnapshot)=>{
      let documents = [];
      querySnapshot.forEach((doc)=>{
        documents.push({...doc.data(), id:doc.id})
      })
      setDocs(documents)
    })
   
    return ()=>unsub();
  },[collection])

  return{ docs };
}

 

export default useFireStore;