import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { HiArrowNarrowRight } from 'react-icons/hi';
import CommingEvent from '../CommingEvent/CommingEvent';
import './CommingEvents.css';

function CommingEvents() {
  const [events, setEvents] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://foodbuzz-server-side.vercel.app/events').then((result) => {
      setEvents(result.data);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <Spinner animation="border" variant="success" />
  ) : (
    <section id="events" className="commingEvents">
      <h1 className="eventsHeader">Upcoming Events</h1>
      <div>
        {events.map((data) => (
          <CommingEvent key={data.id} data={data} />
        ))}
      </div>
      <button type="button">
        View All Event <HiArrowNarrowRight />
      </button>
    </section>
  );
}

export default CommingEvents;
