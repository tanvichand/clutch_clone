// CustomerDashboard.js
import React, { useState } from 'react';
import './CustomerDashboard.css';

const CustomerDashboard = () => {
  const [reviews, setReviews] = useState([
    { id: 1, customer: 'John Doe', project: 'Project A',  rating: 4, review: 'Great work!' },
    { id: 2, customer: 'Jane Smith', project: 'Project B', rating: 5, review: 'Excellent collaboration!' },
    { id: 3, customer: 'Bob Johnson', project: 'Project C',  rating: 3, review: 'Some challenges but good overall.' },
    { id: 4, customer: 'Alice Johnson', project: 'Project D',  rating: 5, review: 'Amazing results!' },
    { id: 5, customer: 'Charlie Brown', project: 'Project E', rating: 4, review: 'Good communication and quality work.' },
    { id: 6, customer: 'Eva Williams', project: 'Project F', rating: 3, review: 'Satisfactory, but room for improvement.' },
    { id: 7, customer: 'Grace Miller', project: 'Project G', rating: 4, review: 'Impressed with the professionalism.' },
    { id: 8, customer: 'Henry Davis', project: 'Project H', rating: 5, review: 'Exceeded expectations, would recommend.' },
    { id: 9, customer: 'Isabel Garcia', project: 'Project I', rating: 3, review: 'Average experience, room for improvement.' },
    { id: 10, customer: 'Jack Smith', project: 'Project J', rating: 4, review: 'Good value for the service provided.' },
  ]);

  const [newReview, setNewReview] = useState({customer:'', project: '', rating: 0, review: '' });
  const [editingId, setEditingId] = useState(null);

  const handleAddReview = () => {
    setReviews([...reviews, { ...newReview, id: Date.now() }]);
    setNewReview({ customer: '', project: '', review: '' });
  };

  const handleEditReview = (id) => {
    const reviewToEdit = reviews.find((review) => review.id === id);
    setNewReview({ ...reviewToEdit });
    setEditingId(id);
  };

  const handleUpdateReview = () => {
    setReviews((prevReviews) =>
      prevReviews.map((review) => (review.id === editingId ? { ...newReview, id: editingId } : review))
    );
    setNewReview({ customer:'', project: '', rating: 0, review: '' });
    setEditingId(null);
  };

  const handleDeleteReview = (id) => {
    setReviews((prevReviews) => prevReviews.filter((review) => review.id !== id));
  };

  return (
    <div>
      <h2>Welcome to the Customer Review Dashboard!</h2>

      {/* Add Review Form */}
      <div className="add-review-form">
        <h3>Add Review</h3>
        <label htmlFor="project">Customer Name:</label>
        <input
          type="text"
          id="cutomer"
          value={newReview.customer}
          onChange={(e) => setNewReview({ ...newReview, customer: e.target.value })}
        />
        <label htmlFor="project">Project Name:</label>
        <input
          type="text"
          id="project"
          value={newReview.project}
          onChange={(e) => setNewReview({ ...newReview, project: e.target.value })}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={newReview.rating}
          onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
        />
        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          value={newReview.review}
          onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
        />
        {editingId ? (
          <button onClick={handleUpdateReview}>Update Review</button>
        ) : (
          <button onClick={handleAddReview}>Add Review</button>
        )}
      </div>

      {/* Reviews Table */}
      <table className="reviews-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Project</th>
            <th>Rating</th>
            <th>Review</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{review.customer}</td>
              <td>{review.project}</td>
              <td>{review.rating}</td>
              <td>{review.review}</td>
              <td>
                <button onClick={() => handleEditReview(review.id)}>Edit</button>
                <button onClick={() => handleDeleteReview(review.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerDashboard;
