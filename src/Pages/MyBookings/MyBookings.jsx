import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  // console.log(bookings);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const [reviewForm, setReviewForm] = useState();
  console.log(reviewForm);
  const [selectedBookingId, setSelectedBookingId] = useState(null);

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your event has been deleted.",
                icon: "success",
              });
              const updated = bookings.filter((booking) => booking._id !== id);
              setBookings(updated);
            }
          });
      }
    });
  };

  const handleReviewClick = (_id) => {
    console.log(_id);
    setSelectedBookingId(_id);
    setReviewForm({ rating: "", comment: "" });
  };

  const handleReviewSubmit = (e, _id) => {
    e.preventDefault();
    console.log(_id);

    const updated = bookings.map((booking) =>
      booking._id === selectedBookingId
        ? { ...booking, review: reviewForm }
        : booking
    );

    setBookings(updated);
    setSelectedBookingId(null);

    console.log("inside the update", updated, _id);
    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewForm),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Review Add Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
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
          <div
            key={booking.id}
            className="border p-4 mb-4 rounded-md shadow-sm"
          >
            <h3 className="text-xl font-semibold">{booking.title}</h3>
            <p className="text-gray-600">📅 Date: {booking.date}</p>
            <p className="text-gray-600">🎟️ Tickets: {booking.tickets}</p>
            <p className="text-gray-600">
              {" "}
              Payment Method: {booking.paymentMethod}
            </p>

            {booking.review ? (
              <div className="mt-2">
                <p className="text-green-700 font-medium">
                  ⭐ {booking.review.rating}/5
                </p>
                <p className="italic">"{booking.review.comment}"</p>
              </div>
            ) : selectedBookingId === booking._id ? (
              <form
                onSubmit={(e) => handleReviewSubmit(e, booking._id)}
                className="mt-4 space-y-2"
              >
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
                onClick={() => handleReviewClick(booking._id)}
                className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
              >
                Add Review
              </button>
            )}

            <button
              onClick={() => handleCancel(booking._id)}
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
