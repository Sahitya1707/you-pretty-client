import React from "react";
import Header from "./header";
import Footer from "./footer";

const RootLayout = ({ children }) => {
  //   console.log({childern});
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
