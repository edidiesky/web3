import React, { useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import Bitcoin from "../../svg/bitcoin";
import Coin2 from "../../svg/coin2";
import Coin3 from "../../svg/coin3";
import Coin4 from "../../svg/coin4";

const bitcondata = [
  {
    icon: <Bitcoin />,
    text: " Built on Bitcoin",
  },
  {
    icon: <Coin2 />,
    text: "Bitcoin Ordinals",
  },
  {
    icon: <Coin3 />,
    text: "Web3 on Bitcoin, using Stacks",
  },
  {
    icon: <Coin4 />,
    text: "Instant transactions with Lightning",
  },
];

export default function Heroindex() {
  //
  return (
    <HeroContainer>
      <div className="herowrapper w-90 auto flex item-center gap-3">
        <div className="heroSection flex column gap-1">
          <div className="hidden">
            <h1
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
              className="text2 text1 text-start"
            >
              A Bitcoin wallet for Web3
            </h1>
          </div>
          <div className="hidden">
            <p
              data-aos="fade"
              data-aos-duration="1300"
              data-aos-delay="600"
              className="family1 text3 text1 text-start text-grey text-center"
            >
              The most advanced Bitcoin wallet, built for everyone. Available
              for Chrome on desktop and for iOS and Android.
            </p>
          </div>
          <div className="w-100 py-2 btnwrapper flex item-center gap-2">
            <div
              data-aos="fade"
              data-aos-duration="1900"
              data-aos-delay="800"
              className="btn"
            >
              Get Started
            </div>
            <div
              data-aos="fade"
              data-aos-duration="1900"
              data-aos-delay="900"
              className="btn btn1"
            >
              Watch Demo
            </div>
          </div>

          <div className="w-100 py-2 family1 coinwrapper flex column gap-2">
            {bitcondata.map((x, index) => {
              return (
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay={index * 100}
                  key={index}
                  className="flex fs-16 text-white item-center gap-1"
                >
                  {x.icon}
                  {x.text}
                </div>
              );
            })}
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="800"
          className="heroSection imageWrapper"
        >
          <img
            src="https://assets.website-files.com/624b08d53d7ac60ccfc11d8d/63ff63f002d8077cbce4797c_hero_crashpunk.webp"
            alt=""
            className="image image1"
          />
          <img
            src="https://assets.website-files.com/624b08d53d7ac60ccfc11d8d/63ff640c0fd691339811ee0c_hero_app.webp"
            alt=""
            className="image image2"
          />
          <img
            src="https://assets.website-files.com/624b08d53d7ac60ccfc11d8d/63ff641df8cbe5a5ce695a7f_here_ext.webp"
            alt=""
            className="image image4"
          />
          <div className="flex column gap-2">
            <img
              alt=""
              src="https://assets.website-files.com/624b08d53d7ac60ccfc11d8d/63ff63d0482cc1082c6a2d50_hero_btc.webp"
              className="image image3 image7"
            />
            <img
              alt=""
              className="image image3 image6"
              src="https://assets.website-files.com/624b08d53d7ac60ccfc11d8d/63ff63b5dfc21a4ff7800e17_hero_xbtc.webp"
            />
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  width: 100%;
  background-color: var(--primary);

  .text1,
  .text2,
  .text3 {
    transform: translate3d(0, 100px, 0);
  }
  .imageWrapper {
    position: relative;
    width: 130%;
    height: 750px;
    /* margin-top: -100px; */
    .image {
      /* position: absolute; */
      width: 100%;
      height: 100%;
      &.image1 {
        z-index: 40;
        position: absolute;
        right: 6%;
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
        /* width: 85rem !important; */
      }
      &.image4 {
        position: absolute;
        right: 5%;
        top: 0;
        z-index: 10;
        /* width: 85rem !important; */
      }
      &.image5 {
        position: absolute;
        right: 0;
        top: 32%;
        z-index: 30;
        transform: translateY(-40%);
        /* width: 85rem !important; */
      }
      &.image6 {
        position: absolute;
        right: 0;
        top: 50%;
        z-index: 40;
        transform: translateY(-48%);
        /* width: 85rem !important; */
      }
      &.image7 {
        position: absolute;
        right: 0;
        top: 50%;
        z-index: 35;
        transform: translateY(-48%);
        /* width: 85rem !important; */
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
    padding: 2rem 0;
    display: grid;
    grid-template-columns: 0.7fr 1fr;
    gap: 1rem;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
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
        font-size: 5.6rem;
        font-weight: 700;
        z-index: 500;

        @media (max-width: 780px) {
          text-align: start;
          font-size: 6rem;
          line-height: 1;
        }
        @media (max-width: 580px) {
          font-size: 5rem !important;
          width: 90%;
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
          width: 90%;
          font-size: 20px;
        }
      }
      .btn:hover {
        background-color: var(--secondary) !important;
      }
      .btn1 {
        background-color: var(--secondary);
        color: #fff;
        border: none !important;
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
