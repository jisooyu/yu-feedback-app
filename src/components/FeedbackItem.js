import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';
import Card from './shared/Card';

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card reverse={true}>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaRegTrashAlt color='red' />
      </button>
      <button className='edit' onClick={() => editFeedback(item)}>
        <FaEdit color='yellow' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
