import React, { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is test feedback 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This is test feedback 2',
      rating: 5,
    },
    {
      id: 3,
      text: 'This is test feedback 3',
      rating: 7,
    },
  ]);

  const [feedbackEdited, setFeedbackEdited] = useState({
    item: {},
    edit: false,
  });

  // add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you want to delete ?'))
      setFeedback(feedback.filter((item) => item.id !== id));
  };

  // edit feedback
  const editFeedback = (item) => {
    setFeedbackEdited({
      item,
      edit: true,
    });
  };

  // update feedback
  const updateFeedback = (id, uptdItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...uptdItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdited,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}>
      {' '}
      {children}{' '}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
