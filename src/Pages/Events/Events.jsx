import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../Shared/Card/Card";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`https://book-my-event-server.vercel.app/events`)
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.error("Error from loading event:", err);
      });
  }, []);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-20">
      {events.map((event) => (
        <Card key={event._id} event={event}></Card>
      ))}
    </div>
  );
};

export default Events;
