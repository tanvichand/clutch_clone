// CompanyDashboard.js
import React, { useState } from 'react';
import './CompanyDashboard.css';

const CompanyDashboard = () => {
  const [reviews] = useState([
    { id: 1, customerName: 'John Doe', projectName: 'Project A', rating: 4, review: 'Great work!' },
    { id: 2, customerName: 'Jane Smith', projectName: 'Project B', rating: 5, review: 'Excellent collaboration!' },
    { id: 3, customerName: 'Bob Johnson', projectName: 'Project C', rating: 3, review: 'Some challenges but good overall.' },
    { id: 4, customerName: 'Alice Johnson', projectName: 'Project D', rating: 5, review: 'Amazing results!' },
    { id: 5, customerName: 'Charlie Brown', projectName: 'Project E', rating: 4, review: 'Good communication and quality work.' },
    { id: 6, customerName: 'Eva Williams', projectName: 'Project F', rating: 3, review: 'Satisfactory, but room for improvement.' },
    { id: 7, customerName: 'Grace Miller', projectName: 'Project G', rating: 4, review: 'Impressed with the professionalism.' },
    { id: 8, customerName: 'Henry Davis', projectName: 'Project H', rating: 5, review: 'Exceeded expectations, would recommend.' },
    { id: 9, customerName: 'Isabel Garcia', projectName: 'Project I', rating: 3, review: 'Average experience, room for improvement.' },
    { id: 10, customerName: 'Jack Smith', projectName: 'Project J', rating: 4, review: 'Good value for the service provided.' },
  ]);

  return (
    <div>
      <h2>Welcome to the Company Dashboard!</h2>

      {/* Reviews Table */}
      <table className="reviews-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Project Name</th>
            <th>Ratings</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{review.customerName}</td>
              <td>{review.projectName}</td>
              <td>{review.rating}</td>
              <td>{review.review}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyDashboard;
