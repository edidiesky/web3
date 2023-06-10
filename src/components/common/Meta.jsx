import React from "react";
import { Helmet } from "react-helmet";
import Styled from "styled-components";
const MetaContainer = Styled.div`
width:100%;
.MetaWrapper {

}
`;
export default function Meta({ title, keyword, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keyword" keyword={keyword} />
      <meta name="description" description={description} />
    </Helmet>
  );
}

Meta.defaultProps = {
  description:
    "Xverse is the most advanced Bitcoin Wallet. Earn Btn, trade NFTs and connect to Web3 apps powered by Stacks. Orginals fully supported. Download for iOS and Android and Chrome",
  keyword: "Bitcoin walet for Web3",
};
