import React, {FC} from 'react';
import styled from "styled-components";

export type EventsCardType = {
  id: number,
  title: string,
  date: string,
  author: string,
  reviews: string,
  location: string,
  description: string,
  imgPreview: string
}

const EventsCard: FC<EventsCardType> = ({
                                          title,
                                          date,
                                          author,
                                          reviews,
                                          location,
                                          description,
                                          imgPreview
                                        }) => {
  return (
    <EventsCardStyled>
      <EventsImgStyled src={imgPreview} alt={title}/>
      <div>{date}</div>
      <div>{title}</div>
      <div>{author}</div>
      <a href="#">{reviews}</a>
      <div>{location}</div>
      <div>{description}</div>
    </EventsCardStyled>
  );
};

const EventsCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  min-width: 50%;
  width: 100%;
  padding: 10px;
`
const EventsImgStyled = styled.img`
  height: 360px;
  object-fit: cover;
  width: 100%;
`

export default EventsCard;