import { useState, useContext ,useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../Context/FeedbackContext';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState('');
  const [btnDisabld, setBtnDisabled] = useState(true);
  const { addFeedback , feedbackEdit,updateFeedback} = useContext(FeedbackContext);

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text Must be atleast 10 Characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
     
      if (feedbackEdit.edit===true) {
            updateFeedback(feedbackEdit.item.id,newFeedback)
      }else{
        addFeedback(newFeedback);

      }



      setText('');
    }
  };

  useEffect(()=>{
    if (feedbackEdit.edit===true) {
          setBtnDisabled(false)
          setText(feedbackEdit.item.text)
          setRating(feedbackEdit.item.rating)
          console.log('Hi');
    }
  },[feedbackEdit])

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3>How would you rate our services?</h3>

        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input onChange={handleTextChange} type='text' placeholder='Write a Review' value={text} />
          <Button type='submit' version='primary' isDisabled={btnDisabld}>
            Send Review
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
