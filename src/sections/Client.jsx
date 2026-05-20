import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { clientReviews } from '../constants/index';

const Feedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [newFeedback, setNewFeedback] = useState({ name: '', position: '', review: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch feedback from Firestore in real-time
  useEffect(() => {
    const q = query(collection(db, 'feedbacks'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const dbFeedback = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      // If db is empty, we can show default reviews from constants, otherwise show db + defaults
      if (dbFeedback.length === 0) {
        setFeedbackList(clientReviews);
      } else {
        setFeedbackList([...dbFeedback, ...clientReviews]);
      }
    }, (error) => {
      console.error("Error fetching feedback: ", error);
      // Fallback to local reviews if Firebase fails/rules block it
      setFeedbackList(clientReviews);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newFeedback.name || !newFeedback.review) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'feedbacks'), {
        name: newFeedback.name,
        position: newFeedback.position || 'Visitor',
        img: '/assets/image.png', // Default placeholder avatar
        review: newFeedback.review,
        createdAt: serverTimestamp()
      });
      
      // Reset form
      setNewFeedback({ name: '', position: '', review: '' });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit feedback. Please check if Firestore database is created and rules allow writing.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="c-space my-20 min-h-screen">
      <h3 className="head-text mb-2">Feedback & Guestbook</h3>
      <p className="text-white-500 mb-10">What do you think about my portfolio? Leave your feedback below!</p>

      {/* Feedback Form */}
      <div className="bg-black/60 border border-white/10 rounded-2xl p-6 mb-12 shadow-lg max-w-3xl mx-auto">
        <h4 className="text-xl font-semibold text-white-800 mb-6">Leave a Review</h4>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="flex-1 bg-black/40 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-yellow-500 transition-colors"
              value={newFeedback.name}
              onChange={(e) => setNewFeedback({ ...newFeedback, name: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Your Position (optional)"
              className="flex-1 bg-black/40 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-yellow-500 transition-colors"
              value={newFeedback.position}
              onChange={(e) => setNewFeedback({ ...newFeedback, position: e.target.value })}
            />
          </div>
          <textarea
            placeholder="Your Feedback *"
            rows={4}
            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-yellow-500 transition-colors"
            value={newFeedback.review}
            onChange={(e) => setNewFeedback({ ...newFeedback, review: e.target.value })}
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="self-end bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </form>
      </div>

      {/* Feedback List */}
      <div className="client-container">
        {feedbackList.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            <div>
              <p className="text-white-800 font-light">{item.review}</p>

              <div className="client-content mt-5">
                <div className="flex gap-3 items-center">
                  <img src={item.img || '/assets/image.png'} alt="reviewer" className="w-12 h-12 rounded-full object-cover" />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">{item.position}</p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
