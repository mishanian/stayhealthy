import { useState } from "react";

export default function GiveReviews() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("5");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="card">
      <h2>Give Reviews</h2>
      <form onSubmit={handleSubmit}>
        <label>Review</label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review"
          disabled={submitted}
          required
        />
        <label>Rating</label>
        <select value={rating} onChange={(e) => setRating(e.target.value)} disabled={submitted}>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        <button type="submit" disabled={submitted}>
          {submitted ? "Review Submitted" : "Submit Review"}
        </button>
      </form>
      {submitted && <p className="small">Thanks for your feedback. Further submission is disabled.</p>}
    </div>
  );
}
