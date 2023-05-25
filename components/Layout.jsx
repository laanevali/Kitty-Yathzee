import React from "react";
 
const Footer = () => {
  return <h3></h3>;
};
  
const Layout = ({ children }) => {
  return (
    <>
      
      {children}
      <Footer />
    </>
  );
};
  
export default Layout;