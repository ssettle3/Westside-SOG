import React from "react";
import styled from "styled-components/macro";
import Tmdb from "../images/tmdb-credit.svg";
import { Space } from "../space/Space";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Bold = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
`;

const Answer = styled.div`
  font-style: italic;
  margin-bottom: 30px;
`;

export const About = () => {
  return (
    <Container>
      <Bold>What is this?</Bold>
      <Answer>
        Screen on the Green - Westside is the simple app created for the cool
        people on Ellen Street to help them recommend and select movies to watch
        :)
      </Answer>
      <Bold>What do I do?</Bold>
      <Answer>
        You can search for a movie by name or explore the different genre this
        app divides up for you! When you see a movie you want to recommend
        simply tap or click on the thumbs up icon in the upper right corner of
        the movie. If a movie has already been recommended by you the thumbs up
        icon will be filled in. You can un recommend if you would like as well.
      </Answer>
      <Bold>Who made this?</Bold>
      <Answer>A really cool guy named Stephen Settle.</Answer>
      <Bold>Credit</Bold>
      <Answer>
        All movie data as it pertains to this app came from
        <Space pad="10px" />
        <img alt="tmdb" src={Tmdb} />
      </Answer>
    </Container>
  );
};
