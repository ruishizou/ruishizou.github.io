import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MiscInDom from "./pages/misc";
import CVInDom from "./pages/cv";
import HomepageInDom from "./pages/home";
import PublicationInDom from "./pages/publication";

export default function Routing() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path={"/"} element={HomepageInDom} />
      <Route path={"/cv"} element={CVInDom} />
      <Route path={"/publication"} element={PublicationInDom} />
      <Route path={"/misc"} element={MiscInDom} />
    </Routes>
  );
}
