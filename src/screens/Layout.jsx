import React from "react";
import { Outlet } from "react-router-dom";
import Styled from "styled-components";
import {  Footer, Newsletter } from "../components/common";
import Header from "../components/common/Header";
// import { Delete, AlertModal } from "../components/modals";
// import HeaderIndex from "../components/home/header";
// import { SearchModal } from "../components/modals";

export default function Layout() {
  return (
    <LayoutContainer>
      <Header/>
      <Outlet />
      <Newsletter />
      <Footer />
    </LayoutContainer>
  );
}

const LayoutContainer = Styled.div`
width:100%;
/* overflow:hidden; */
`;
