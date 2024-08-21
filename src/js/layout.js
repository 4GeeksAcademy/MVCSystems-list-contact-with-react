import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home.jsx";
import injectContext from "./store/appContext.js";
import AddContact from "./views/AddContact.jsx";
import EditContact from "./views/EditContact.jsx";

const Layout = () => {
  const basename = process.env.BASENAME || "";
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Add" element={<AddContact />} />
        <Route path="/EditContact" element={<EditContact></EditContact>} />
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
