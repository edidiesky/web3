import React, { useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import Bitcoin from "../../svg/bitcoin";
import Coin2 from "../../svg/coin2";
import Coin3 from "../../svg/coin3";
import Coin4 from "../../svg/coin4";

export default function Heroindex() {
  useEffect(() => {
    gsap.to(".text1", {
      transform: "none",
      duration: 0.8,
      delay: 0.5,
      ease: "Power4.Out",
      stagger: {
        amount: 0.5,
      },
    });
  }, []);
  //
  return (
    <HeroContainer>
      <div className="herowrapper w-90 auto flex item-start gap-3">
        <div className="heroSection flex-1 flex column gap-1">
          <div className="hidden">
            <h1 className="text2 text1 text-start">
              A Bitcoin wallet for Web3
            </h1>
          </div>
          <div className="hidden">
            <p className="family1 text3 text1 text-start text-grey text-center">
              The most advanced Bitcoin wallet, built for everyone. Available
              for Chrome on desktop and for iOS and Android.
            </p>
          </div>
          <div className="w-100 py-2 btnwrapper flex item-center gap-2">
            <div className="btn">Get Started</div>
            <div className="btn btn1">Watch Demo</div>
          </div>

          <div className="w-100 py-2 coinwrapper flex column gap-2">
            <div className="flex fs-16 text-white item-center gap-1">
              <Bitcoin />
              Built on Bitcoin
            </div>
            <div className="flex fs-16 text-white item-center gap-1">
              <Coin2 />
              Bitcoin Ordinals
            </div>
            <div className="flex fs-16 text-white item-center gap-1">
              <Coin3 />
              Web3 on Bitcoin, using Stacks
            </div>
            <div className="flex fs-16 text-white item-center gap-1">
              <Coin4 />
              Instant transactions with Lightning
            </div>
          </div>
        </div>
        <div className="heroSection flex-1 imageWrapper">
          <img
            src="https://assets.website-files.com/624b08d53d7ac60ccfc11d8d/63ff64bac6518881bfc7afc7_stacking_btc.webp"
            alt=""
            className="image image1"
          />
          <img
            src="https://assets.website-files.com/624b08d53d7ac60ccfc11d8d/638a001e242c0a39e2cf662c_Frame%2072820%20(1)-min.png"
            alt=""
            className="image image2"
          />
          <img
            alt=""
            src="https://assets.website-files.com/624b08d53d7ac60ccfc11d8d/63ff64aaada9cc172590170f_stacking_progress.webp"
            className="image image3"
          />
        </div>
      </div>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  width: 100%;
  .text1,
  .text2,
  .text3 {
    transform: translate3d(0, 100px, 0);
  }
  .imageWrapper {
    position: relative;
    /* height: 30rem; */
    min-height: 40rem;
    @media (max-width: 780px) {
      min-height: 40rem;
    }
    .image {
      /* position: absolute; */
      width: 100%;
      height: 100%;
      &.image1 {
        z-index: 40;
        position: absolute;
        right: 0;
        top: 0;
      }
      &.image3 {
        z-index: 60;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-45%);
      }
      &.image2 {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        z-index: 10;
      }
    }
  }

  .imageWrap {
    position: absolute;
    top: 0px;
    left: 0;
    height: 100%;
    transform: scale(-1, 1);
    width: 100%;
    opacity: 0.6;
    background-size: cover;
    background-position: center;
  }
  .herowrapper {
    padding: 7rem 0;
    @media (max-width: 780px) {
      flex-direction: column;
      padding: 4rem 0;
    }
    .heroImage {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      object-fit: cover;
    }

    .heroSection {
      h3 {
        font-weight: normal;
        text-transform: uppercase;
        font-size: 26px;
        @media (max-width: 580px) {
          text-align: start;
          font-size: 18px;
        }
      }
      h1 {
        color: #fff;
        font-size: 6rem;
        font-weight: 700;
        z-index: 500;

        @media (max-width: 780px) {
          text-align: start;
          font-size: 6rem;
          line-height: 1;
        }
        @media (max-width: 580px) {
          font-size: 5rem !important;
        }
      }
      p {
        font-size: 22px;
        font-weight: normal;
        @media (max-width: 580px) {
          text-align: start;
          line-height: 1.3;
        }
        @media (max-width: 580px) {
          font-size: 2rem !important;
          width: 90%;
        }
      }
      .btn1 {
        background-color: var(--secondary);
        color: #fff;
        &:hover {
          opacity: 0.7;
        }
      }
      .btnwrapper {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 2rem 0;
        padding-top: 4.5rem;
        @media (max-width: 380px) {
          padding-top: 4rem;
          flex-direction: column;
          align-items: flex-start;
        }
      }

      .coinwrapper {
        padding-top: 4rem;
      }
    }
  }
`;
