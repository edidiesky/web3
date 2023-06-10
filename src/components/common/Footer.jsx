import React from "react";
import styled from "styled-components";
import { BsDiscord, BsTwitter, BsInstagram, BsTiktok } from "react-icons/bs";
import { Link } from "react-router-dom";
const link1 = [
  { text: "Secret Key Labs", path: "https://www.secretkeylabs.com/" },
  { text: "Careers", path: "https://xversewallets.app/team-careers" },
  { text: "Press Kit", path: "https://install.xverse.app/PressKit.zip" },
  { text: "Documentation", path: "https://xversewallets.app/documentation" },
];

const link2 = [
  { text: "FAQ", path: "https://www.secretkeylabs.com/" },
  { text: "Road Map", path: "https://xversewallets.app/team-careers" },
  { text: "Xverse Pool", path: "https://install.xverse.app/PressKit.zip" },
];

const link3 = [
  { icon: <BsDiscord />, path: "https://discord.gg/7kdWfQtbfW" },
  { icon: <BsTwitter />, path: "https://twitter.com/xverseApp" },
  { icon: <BsInstagram />, path: "https://www.instagram.com/xverseapp/" },
  { icon: <BsTiktok />, path: "https://www.tiktok.com/@xverseapp" },
];
export default function Footer() {
  return (
    <FooterContainer>
      <div className="footerWrapper w-90 auto">
        <Link>
          <img
            src="https://assets.website-files.com/624b08d53d7ac60ccfc11d8d/624b08d53d7ac69575c11ded_Xverse_horizontal_mono_white%20(1).svg"
            alt=""
          />
        </Link>
        <div className="flex column gap-2">
          <h5 className="fs-16 text-white text-bold">Company</h5>
          <div className="w-100 flex column gap-1">
            {link1.map((x, index) => {
              return (
                <Link
                  to={x.path}
                  key={index}
                  className="fs-16 family1 text-light text-grey"
                >
                  {x.text}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex column gap-2">
          <h5 className="fs-16 text-white text-bold">Explore</h5>
          <div className="w-100 flex column gap-1">
            {link2.map((x, index) => {
              return (
                <Link
                  to={x.path}
                  key={index}
                  className="fs-16 family1 text-light text-grey"
                >
                  {x.text}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex column gap-2">
          <h5 className="fs-16 text-white text-bold">Company</h5>
          <div className="w-100 flex column gap-1">
            <Link to={""} className="fs-16 family1 text-light text-grey">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="flex column gap-2">
          <h5 className="fs-16 text-white text-bold">Social</h5>
          <div className="w-100 flex item-center gap-1">
            {link3.map((x, index) => {
              return (
                <Link
                  to={x.path}
                  key={index}
                  className="fs-16 family1 flex item-center justify-center icon text-light text-grey"
                >
                  {x.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  z-index: 70;
  padding: 5rem 0;
  padding-bottom: 4rem;
  position: relative;
  background-color: var(--primary);

  a:hover {
    color: var(--green);
    text-decoration: underline;
  }
  .icon {
    background-color: var(--secondary);
    width: 3.5rem;
    height:3.5rem;
    border-radius: 50%;

    svg {
      font-size: 18px;
      color: #fff;
    }
  }
  .footerWrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 2rem;
    place-items: start;
    @media (max-width:980px) {
      grid-gap: 7rem;
    }
    @media (max-width:580px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
`;
