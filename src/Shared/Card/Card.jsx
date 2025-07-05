import { Link } from "react-router-dom";

const Card = ({event}) => {
    console.log(event)


  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={event?.image}
          alt={event?.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{event.title} </h2>
        
        <p>
          {event?.date}
        </p>
        <p>{event?.location}</p>
        <div className="card-actions justify-end">
            <Link to={`/events/${event?._id}`}><button className="btn btn-primary">View Details</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
