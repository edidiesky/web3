import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

import Alexgio from "../svg/alexdio";
import Alexdio from "../svg/citycoin";
import Akergio from "../svg/akerdio";
import Gamma from "../svg/gamma";
import Coin3 from "../svg/coin3";
export default function FavouriteIndex() {
  //
  return (
    <FavouriteContainer>
      <div className="favourwrapper w-90 auto flex item-center justify-center gap-3">
        <div className="heroSection flex-1 item-center justify-center  flex column gap-1">
          <div className="hidden">
            <h2
              data-aos="fade"
              data-aos-duration="1500"
              data-aos-delay="300"
              className="text2 text1 text-center"
            >
              Browse your favorite Web3 Apps
            </h2>
          </div>
          <div className="hidden">
            <p
              data-aos="fade"
              data-aos-duration="1700"
              data-aos-delay="400"
              className="family1 text3 w-85 auto text1 text-center text-grey text-center"
            >
              onnect to Stacks decentralized applications secured by Bitcoin.
              Swap tokens with ALEX or Arkadiko and trade NFTs on Gamma or
              Tradeport.
            </p>
          </div>
          <div
            data-aos="fade"
            data-aos-duration="1900"
            data-aos-delay="400"
            className="w-100 py-2 coinwrapper flex justify-center item-center gap-2"
            style={{ flexWrap: "wrap" }}
          >
            <div className="flex fs-16 text-white item-center gap-1">
              <Alexgio />
            </div>
            <div className="flex fs-16 text-white item-center gap-1">
              <Alexdio />
            </div>
            <div className="flex fs-16 text-white item-center gap-1">
              <Akergio />
            </div>
            <div className="flex fs-16 text-white item-center gap-1">
              <Coin3 />
            </div>
            <div className="flex fs-16 text-white item-center gap-1">
              <Gamma />
            </div>
          </div>
          <Link
            data-aos="fade"
            data-aos-duration="1400"
            data-aos-delay="400"
            to={"/"}
            className="fs-24 py-2 text-grey flex item-center gap-2 family1 text-light"
          >
            Learn how to integrate with Xverse
            <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </FavouriteContainer>
  );
}

const FavouriteContainer = styled.section`
  width: 100%;
  background-color: #333;
  padding-top: 6rem;
  a:hover {
    color: var(--green);
    text-decoration: underline;

    svg {
      transform: translateX(20px);
      transition: all 0.3s ease;
    }
  }
  .heroSection {
    h2 {
      color: #fff;
      font-size: 4rem;
      font-weight: 700;
      z-index: 500;

      @media (max-width: 780px) {
        text-align: center;
        font-size: 6rem;
        line-height: 1;
      }
      @media (max-width: 580px) {
        font-size: 5rem !important;
        text-align: start;
      }
    }
    p {
      font-size: 22px;
      font-weight: normal;
      @media (max-width: 580px) {
        text-align: start;
        line-height: 1.3;
        width: 100%;
        font-size: 2rem !important;
      }
    }
    .btn1 {
      background-color: var(--secondary);
      color: #fff;
      &:hover {
        opacity: 0.7;
      }
    }
    .coinwrapper {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 2rem 0;
      padding-top: 4.5rem;

      @media (max-width: 580px) {
        padding-top: 4rem;
        justify-content: flex-start;
      }
    }
  }

  .favourwrapper {
    padding: 6rem 0;
    @media (max-width: 780px) {
      flex-direction: column;
    }
  }
`;
