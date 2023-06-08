import React, {FC} from 'react';
import styled from "styled-components";
import EventsCard, {EventsCardType} from "./eventsCard/EventsCard";

export type EventsType = {
  events: EventsCardType[]
}

export const Events: FC<EventsType> = ({events}) => {
  return (
    <EventsStyled>
      {events.map(event => {
        return (
          <EventsCard
            key={event.id}
            id={event.id}
            imgPreview={event.imgPreview}
            title={event.title}
            date={event.date}
            author={event.author}
            reviews={event.reviews}
            location={event.location}
            description={event.description}
          />
        )
      })}
    </EventsStyled>
  );
};

const EventsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`