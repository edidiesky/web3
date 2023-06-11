import React from "react";
import styled from "styled-components";

export default function EarnIndex() {
  //
  return (
    <EarnContainer>
      <div className="Earnwrapper w-85 auto flex item-center gap-3">
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
          className="heroSection flex-1 imageWrapper"
        >
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
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="400"
          className="heroSection flex-1 flex column gap-1"
        >
          <div className="hidden">
            <h2 className="text2 text1 text-start">Earn Bitcoin Rewards</h2>
          </div>
          <div className="hidden">
            <p className="family1 text3 w-85 text1 text-start text-grey text-center">
              Lock your Stacks in the Xverse non-custodial stacking pool and
              earn native Bitcoin without fees.
            </p>
          </div>
          <div className="w-100 py-2 btnwrapper flex item-center gap-2">
            <div className="btn">Get Started</div>
            <div className="btn btn1">Watch Demo</div>
          </div>
        </div>
      </div>
    </EarnContainer>
  );
}

const EarnContainer = styled.section`
  width: 100%;
  background-color: #333;
  padding-top: 6rem;
  .imageWrapper {
    position: relative;
    min-height: 40rem;
    @media (max-width: 780px) {
      min-height: 40rem;
      width: 100%;
    }
    .image {
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
  .heroSection {
    h2 {
      color: #fff;
      font-size: 4rem;
      font-weight: 700;
      z-index: 500;

      @media (max-width: 780px) {
        text-align: start;
        font-size: 6rem;
        line-height: 1;
      }
      @media (max-width: 580px) {
        font-size: 3.5rem !important;
      }
    }
    p {
      font-size: 19px;
      font-weight: normal;
      @media (max-width: 580px) {
        text-align: start;
        line-height: 1.3;
      }
      @media (max-width: 580px) {
        font-size: 1.8rem !important;
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
      @media (max-width: 580px) {
        padding-top: 4rem;
      }
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

  .Earnwrapper {
    padding: 4rem 0;
    @media (max-width: 780px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
