// import React from "react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { Footer, Newsletter } from "../components/common";
import Header from "../components/common/Header";
import Delete from "../components/modals/DeleteModal";
// import { Delete, AlertModal } from "../components/modals";
// import HeaderIndex from "../components/home/header";
// import { SearchModal } from "../components/modals";

export default function Layout() {
  const [click, setClick] = useState(false);
  const handleClose = () => {
    setClick(false);
  };
  return (
    <LayoutContainer>
      <AnimatePresence
        initial="false"
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {click && <Delete Click={click} handleClose={handleClose} />}
      </AnimatePresence>
      <Header setClick={setClick} />
      <Outlet />
      <Newsletter />
      <Footer />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;
