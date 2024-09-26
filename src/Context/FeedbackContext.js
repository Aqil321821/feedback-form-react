import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext= createContext();

export const  FeedbackProvider=({children})=>{
    const [feedback,setFeedback]=useState([
        {
               id:1,
               text: 'This is text from context',
               rating:7
        },
        {
               id:2,
               text: 'This is text from context 2',
               rating:8
        }
    ])

    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false
    })

  const editFeedback=(item)=>{
    setFeedbackEdit({
        item,
        edit:true,
    })
  }

const updateFeedback=(id,updatedItem)=>{
     setFeedback(feedback.map((item)=>item.id===id ? {...item, ...updatedItem}:item))
}


 
    const deleteFeedback=(id)=>{
        if (window.confirm("Pakka Na?")) {
             setFeedback(feedback.filter((item)=> item.id !== id))          
        }
  }
  const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4();
       setFeedback([newFeedback, ...feedback])
  }

    return <FeedbackContext.Provider value={{feedback,updateFeedback, deleteFeedback,addFeedback,editFeedback,feedbackEdit}}> 
                        {children}
                  </FeedbackContext.Provider>
}

export default FeedbackContext;