import React, {  useState } from 'react';

const MyBookings = () => {
    const [bookings, setBookings] = useState([
    {
      id: 1,
      eventName: 'Tech Conference 2025',
      date: '2025-08-10',
      tickets: 2,
      review: null,
    },
    {
      id: 2,
      eventName: 'Music Fest',
      date: '2025-09-01',
      tickets: 1,
      review: null,
    },
  ]);

  //   useEffect(() => {
  //   fetch("")
  //     .then((res) => res.json())
  //     .then((data) => setJobs(data));
  // }, []);

  const [reviewForm, setReviewForm] = useState({
    rating: '',
    comment: '',
  });

  const [selectedBookingId, setSelectedBookingId] = useState(null);

  const handleCancel = (id) => {
    const updated = bookings.filter((booking) => booking.id !== id);
    setBookings(updated);
  };

  const handleReviewClick = (id) => {
    setSelectedBookingId(id);
    setReviewForm({ rating: '', comment: '' });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const updated = bookings.map((booking) =>
      booking.id === selectedBookingId
        ? { ...booking, review: reviewForm }
        : booking
    );
    setBookings(updated);
    setSelectedBookingId(null);
  };

  const handleChange = (e) => {
    setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });
  };
  
    return (
         <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">My Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-600">No bookings found.</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking.id} className="border p-4 mb-4 rounded-md shadow-sm">
            <h3 className="text-xl font-semibold">{booking.eventName}</h3>
            <p className="text-gray-600">📅 Date: {booking.date}</p>
            <p className="text-gray-600">🎟️ Tickets: {booking.tickets}</p>

            {booking.review ? (
              <div className="mt-2">
                <p className="text-green-700 font-medium">⭐ {booking.review.rating}/5</p>
                <p className="italic">"{booking.review.comment}"</p>
              </div>
            ) : (
              selectedBookingId === booking.id ? (
                <form onSubmit={handleReviewSubmit} className="mt-4 space-y-2">
                  <label className="block">
                    Rating (1–5):
                    <input
                      type="number"
                      name="rating"
                      value={reviewForm.rating}
                      onChange={handleChange}
                      min="1"
                      max="5"
                      required
                      className="w-full border p-1 rounded mt-1"
                    />
                  </label>
                  <label className="block">
                    Comment:
                    <textarea
                      name="comment"
                      value={reviewForm.comment}
                      onChange={handleChange}
                      className="w-full border p-2 rounded mt-1"
                      rows={2}
                      required
                    />
                  </label>
                  <div className="flex gap-2 mt-2">
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                    >
                      Submit Review
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedBookingId(null)}
                      className="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <button
                  onClick={() => handleReviewClick(booking.id)}
                  className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                >
                  Add Review
                </button>
              )
            )}

            <button
              onClick={() => handleCancel(booking.id)}
              className="mt-2 ml-4 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
            >
              Cancel Booking
            </button>
          </div>
        ))
      )}
    </div>
    );
};

export default MyBookings;