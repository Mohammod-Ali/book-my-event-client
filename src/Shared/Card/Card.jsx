import { CalendarDays, MapPin, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({event}) => {
    console.log(event)


  return (
     <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={event.image} alt={event.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{event.title}
               <div className="badge badge-secondary">{event.category}</div>
               </h2>
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
            <div className="flex items-center gap-2">
          <Ticket size={18} className="text-blue-500" />
          <span>{event.availableSeats} of {event.seats} seats available</span>
        </div>
            <div className="card-actions justify-end">
              <Link to={`/events/${event?._id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
  );
};

export default Card;
