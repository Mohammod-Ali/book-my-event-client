import { CalendarDays, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedEvent = ({ search }) => {
  console.log(search);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://book-my-event-server.vercel.app/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, [search]);

  return (
    <>
      {search && <h1 className="text-2xl mt-10">Your Search Result:</h1>}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10 justify-items-center">
        {search &&
          search.map((singleSearch) => (
            <div
              key={singleSearch._id}
              className="card bg-base-100 w-96 shadow-sm"
            >
              <figure>
                <img src={singleSearch.image} alt={singleSearch.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{singleSearch.title} </h2>
                <p className="flex items-center gap-1">
                  {" "}
                  <CalendarDays size={18} className="text-blue-500" />
                  Deadline: {singleSearch.registrationDeadline}
                </p>
                <p className="flex items-center gap-1">
                  <CalendarDays size={18} className="text-blue-500" />
                  Event Date: {singleSearch.date}
                </p>
                <p className="flex items-center gap-1">
                  <MapPin size={18} className="text-blue-500" />
                  {singleSearch?.location}
                </p>
                <div className="card-actions justify-end">
                  <Link to={`/events/${singleSearch?._id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      {search ? (
        <></>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-20 justify-items-center">
          {events.slice(0, 3).map((event) => (
            <div key={event._id} className="card bg-base-100 w-96 shadow-sm">
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
      )}
    </>
  );
};

export default FeaturedEvent;
