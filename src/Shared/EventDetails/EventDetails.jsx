import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CalendarDays, MapPin, Ticket } from 'lucide-react';



const EventDetails = () => {
    const {id} = useParams()
    const [event, setEvent] = useState([])

    useEffect( () => {
        axios.get(`http://localhost:5000/events/${id}`)
        .then(res => {
            setEvent(res.data)
        })
        .catch(err => {
            console.error('Error from loading event:', err)
        })
    },[id])

    return (
        <div className="max-w-4xl mx-auto p-6">
      {/* Event Image */}
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-64 object-cover rounded-xl shadow mb-6"
      />

      {/* Event Title */}
      <h1 className="text-3xl font-bold mb-2">{event.title}</h1>

      {/* Category & Organizer */}
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">{event.category}</span>
        <span className="text-sm text-gray-600">
          Organized by <strong>{event.organizer?.name}</strong>
        </span>
      </div>

      {/* Info Section */}
      <div className="space-y-2 text-gray-700 mb-6">
        <div className="flex items-center gap-2">
          <CalendarDays size={18} className="text-blue-500" />
          <span>
            {event.date} &middot; {event.registrationDeadline && (
              <span className="text-sm text-red-600">(Register by {event.registrationDeadline})</span>
            )}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-blue-500" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Ticket size={18} className="text-blue-500" />
          <span>{event.availableSeats} of {event.seats} seats available</span>
        </div>
        <div>
          <strong>Fee:</strong> ${event.registrationFee}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-800 mb-8">{event.description}</p>

      {/* Register Button */}
      <Link to={`/registration/${id}`}>
      <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Register Now
      </button>
      </Link>
      
    </div>
    );
};

export default EventDetails;