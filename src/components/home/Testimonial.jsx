import React from "react";
import styled from "styled-components";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./theme.css";
import { testimonialData } from "../../data/Testimonial";
// owl options
const options = {
  items: 1,
  dots: true,
  dotsClass: "owl-dots custom-dots",
  dotClass: "owl-dot custom-dot",
  margin: 20,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
  },
};

export default function About() {
  return (
    <AboutContent>
      <div className="w-85 auto flex column gap-4 item-start">
        <div className="w-100 hidden">
          <h2
            className="fs-35 text-bold"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="450"
          >
            What Xverse users are saying
          </h2>
        </div>

        {/* owl carousel section */}
        <OwlCarousel className="owl-theme" {...options}>
          {testimonialData.map((x) => {
            return (
              <div className="w-100 flex1 item-start gap-2" key={x.id}>
                <div className="imageWrapper item hidden">
                  <img src={x.image} alt="" className="images" />
                </div>

                <div className="testCard  item flex column gap-4 flex-1 py-4">
                  <div className=" textTop">
                    <ImQuotesLeft className="icons icon1" />
                    <div className=" hidden">
                      <h3 className="line1 fs-18 text-light w-90">{x.desc}</h3>
                    </div>

                    <ImQuotesRight className="icons icon2" data-aos="zoom-in" />
                  </div>
                  <div className="w-100 flex column item-start gap-1">
                    <div className="w-100 hidden">
                      <h4 className="text-white fs-20 family1">{x.name}</h4>
                    </div>
                    <div className="w-100 hidden">
                      <h5
                        className="fs-14 text-white family1"
                        data-aos-delay="550"
                      >
                        {x.company}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </AboutContent>
  );
}

const AboutContent = styled.div`
  width: 100%;
  padding: 8rem 0;
  .imageWrapper {
  }
  .flex1 {
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 100%;
    @media (max-width: 980px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  h3 {
    line-height: 1.7;
    width: 86%;
    @media (max-width: 780px) {
      font-size: 16px;
    }
  }
  h4 {
    position: relative;
  }
  .textTop {
    position: relative;
    .icons {
      position: absolute;
      font-size: 24px;
      color: var(--dark-1);
      &.icon1 {
        top: -50%;
        left: -2%;
        @media (max-width: 980px) {
          left: 0;
          top: -35%;
        }
      }
      &.icon2 {
        bottom: -50%;
        right: 15%;
        @media (max-width: 980px) {
          right: 0;
        }
      }
    }
  }
  .images {
    position: relative;
    height: 20rem;
    width: 20rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;
