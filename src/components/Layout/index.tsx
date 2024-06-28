import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TabsBar from "@/components/TabsBar";
import AppWrapper from "@/components/AppWrapper";
import { ContentWrapper } from "./styles";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Layout = ({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) => {
  return (
    <StyledComponentsRegistry>
      <AppWrapper>
        <ContentWrapper>
          <Header />
          <p>The places you dream of</p>
          <p>Let&apos;s live new adventures</p>
          <div className="search-bar">
            <input type="text" placeholder="Search trips" />
            <button>Search</button>
          </div>
          <TabsBar />
          {children}
        </ContentWrapper>
        </AppWrapper>
        <Footer />
    </StyledComponentsRegistry>
  );
};
export default Layout;
