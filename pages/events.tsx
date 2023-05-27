import { Events } from '@/types';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useState } from 'react';

interface EventListProps {
  eventsList: Events;
}

const EventList = ({ eventsList }: EventListProps) => {
  const [events, setEvents] = useState(eventsList);
  const router = useRouter();
  const fetchSportEvents = async () => {
    let data: Events = [];
    try {
      const response = await fetch(
        'http://localhost:4000/events?category=sports'
      );
      data = (await response.json()) as Events;
    } catch (error) {}
    setEvents(data);
    router.push('/events?category=sports', undefined, { shallow: true });
  };
  return (
    <div>
      <Link href="/">Back to home</Link>
      <button onClick={fetchSportEvents}>Sport events</button>
      <h1>List of events</h1>
      {!events.length && <div>No events</div>}
      {events.map((event) => (
        <div key={event.id}>
          <h2>
            {event.title} {event.date} | {event.category}{' '}
          </h2>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

interface MyQuery extends ParsedUrlQuery {
  category: string;
}

export const getServerSideProps: GetServerSideProps<
  EventListProps,
  MyQuery
> = async (context) => {
  const { category } = context.query;
  const queryString = category ? `category=sports` : '';
  try {
    const response = await fetch(`http://localhost:4000/events?${queryString}`);
    const eventsList = (await response.json()) as Events;
    return {
      props: { eventsList },
    };
  } catch (error) {
    return {
      props: { eventsList: [] },
    };
  }
};

export default EventList;
