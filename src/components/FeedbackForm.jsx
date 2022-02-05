import React , {useState, useContext, useEffect} from 'react';

import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect  from './RatingSelect';

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const {addFeedback, feedbackEdited, updateFeedback} = useContext(FeedbackContext)

  useEffect(()=> {
    if (feedbackEdited.edit === true){
      setBtnDisabled(false)
      setText(feedbackEdited.item.text)
      setRating(feedbackEdited.item.rating)
    }
  }, [feedbackEdited])

  const handleTextChange =(e) => {
    if(text === '' ){
      setMessage(null)
      setBtnDisabled(true)
    } else if (text !=='' && text.trim().length <= 10){
      setMessage('The text must be longer than 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault(e)
    if (text.trim().length > 10){
      const newFeedback = {
        text,
        rating
      }
      if (feedbackEdited.edit === true){
         updateFeedback(feedbackEdited.item.id , newFeedback)
        } else {
        addFeedback(newFeedback)
      }
      setText('')
      setRating('')
    }
  }

  return  (
  <Card>
    <form onSubmit={handleSubmit}>
      <h2>How would you rate the service with us?</h2>
      <RatingSelect select={(rating)=> setRating(rating)} />
      <div className="input-group">
        <input type="text"  onChange={handleTextChange} value={text} placeholder='Write your review'/>
        <Button type="submit" isDisabled={btnDisabled} >Send</Button>
      </div>
      {message && <div className='message' >{message}</div>}
    </form>
  </Card>
  )
};

export default FeedbackForm;
