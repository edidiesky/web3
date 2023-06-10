import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContent className="w-100 flex">
      <div className="w-90 auto flex item-center justify-space">
        <Link>
          <img
            src="https://assets.website-files.com/624b08d53d7ac60ccfc11d8d/624b08d53d7ac69575c11ded_Xverse_horizontal_mono_white%20(1).svg"
            alt=""
          />
        </Link>
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
  background-color: rgba(18, 21, 30, 0.85);
  backdrop-filter: blur(24px);
  z-index: 1000;
`;

export default Header;
