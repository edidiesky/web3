import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const list1 = [
  {
    text: "Earn Bitcoin",
    link: "https://pool.xverse.app/",
  },
  {
    text: "Blog",
    link: "https://pool.xverse.app/",
  },
  {
    text: "Support",
    link: "https://pool.xverse.app/",
  },
  {
    text: "About",
    link: "https://pool.xverse.app/",
  },
];
const Header = ({ setClick }) => {
  return (
    <HeaderContent className="w-100 flex">
      <div className="w-90 auto flex item-center justify-space">
        <div className="flex-1">
          <Link>
            <img
              src="https://assets.website-files.com/624b08d53d7ac60ccfc11d8d/624b08d53d7ac69575c11ded_Xverse_horizontal_mono_white%20(1).svg"
              alt=""
            />
          </Link>
        </div>
        <div className="flex-1 linklist flex item-center gap-4">
          {list1.map((x, index) => {
            return (
              <Link
                to={x.link}
                className="fs-16 text-bold links text-grey"
                key={index}
              >
                {x.text}
              </Link>
            );
          })}
        </div>
        <div className="btn fs-14" onClick={() => setClick(true)}>
          Import wallet
        </div>
      </div>
    </HeaderContent>
  );
};

const HeaderContent = styled.div`
  padding: 2rem 0;
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  height: 92px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(191, 190, 235, 0.2);
  /* background-color: red;
   */
  /* background-color: rgba(18, 21, 30, 0.85); */
  backdrop-filter: blur(54px);
  opacity: 1;
  background-color: var(--primary);
  z-index: 1000;
  .linklist {
    @media (max-width: 780px) {
      display: none;
    }
  }
  .btn {
    @media (max-width: 780px) {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
  }
  .links {
    position: relative;
    &:hover {
      &::after {
        width: 100%;
      }
    }
    &::after {
      content: "";
      width: 0;
      height: 1.5px;
      border-radius: 10px;
      background-color: #fff;
      bottom: -15%;
      left: 0;
      position: absolute;
      transition: all 0.5s;
    }
  }
`;

export default Header;
