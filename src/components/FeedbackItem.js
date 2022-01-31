import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import Card from './shared/Card';

const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaRegTrashAlt color='red' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
