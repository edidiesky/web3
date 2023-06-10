import React, { useEffect } from "react";
import styled from "styled-components";
import Heroindex from "../components/home/hero";
import { Meta } from "../components/common";
import EarnIndex from "../components/home/Earn";
import FavouriteIndex from "../components/home/Favourite";
import LearnIndex from "../components/home/Learn";
import TestimonialIndex from "../components/home/Testimonial";

export default function Home() {
  return (
    <>
      <Meta />

      <HomeContainer>
        <>
          <Heroindex />
          <EarnIndex />
          <FavouriteIndex />
          <LearnIndex />
          <TestimonialIndex />
        </>
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  /* background: #fff; */
`;
