import { PropsWithChildren } from "react";
import Navbar from "../components/Navbar";
import { BasicLayoutWrapper } from "./BasicLayout.styles";

type BasicLayoutProps = {};

const BasicLayout = ({ children }: PropsWithChildren<BasicLayoutProps>) => {
  return (
    <BasicLayoutWrapper>
      <Navbar />
      {children}
    </BasicLayoutWrapper>
  );
};

export default BasicLayout;
