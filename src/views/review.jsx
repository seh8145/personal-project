import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Layout from '../components/layout/layout'; // 올바른 파일 경로 및 이름 확인

const ReviewContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const ReviewInput = styled.input`
  padding: 10px;
  font-size: 1em;
`;

const ReviewTextarea = styled.textarea`
  padding: 10px;
  font-size: 1em;
`;

const ReviewButton = styled.button`
  padding: 10px;
  font-size: 1em;
  background-color: #00796b;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004d40;
  }
`;

const ReviewItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [userName, setUserName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/reviews')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the reviews!', error);
        setError('Failed to load reviews. Please try again later.');
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userName.trim() || !reviewText.trim()) {
      alert('이름 및 리뷰를 적어주세요');
      return;
    }

    axios.post('http://localhost:5000/reviews', { user_name: userName, review_text: reviewText })
      .then(response => {
        setReviews([...reviews, response.data]);
        setUserName('');
        setReviewText('');
      })
      .catch(error => {
        console.error('There was an error posting the review!', error);
        setError('Failed to post review. Please try again later.');
      });
  };

  return (
    <Layout>
      <ReviewContainer>
        <h1>Reviews</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <ReviewForm onSubmit={handleSubmit}>
          <ReviewInput
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <ReviewTextarea
            placeholder="Your Review"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <ReviewButton type="submit">Submit</ReviewButton>
        </ReviewForm>
        {reviews.map(review => (
          <ReviewItem key={review.id}>
            <strong>{review.user_name}</strong>
            <p>{review.review_text}</p>
          </ReviewItem>
        ))}
      </ReviewContainer>
    </Layout>
  );
};

export default ReviewPage;