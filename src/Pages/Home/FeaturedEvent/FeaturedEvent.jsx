import { CalendarDays, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-20">
      {events.slice(0, 3).map((event) => (
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={event.image} alt={event.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{event.title} </h2>
            <p className="flex items-center gap-1">
              {" "}
              <CalendarDays size={18} className="text-blue-500" />
              Deadline: {event.registrationDeadline}
            </p>
            <p className="flex items-center gap-1">
              <CalendarDays size={18} className="text-blue-500" />
              Event Date: {event.date}
            </p>
            <p className="flex items-center gap-1">
              <MapPin size={18} className="text-blue-500" />
              {event?.location}
            </p>
            <div className="card-actions justify-end">
              <Link to={`/events/${event?._id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedEvent;
