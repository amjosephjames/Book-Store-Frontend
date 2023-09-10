import React from "react";
import Homescreen from "../src/components/homescreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "../src/components/upload";
import Books from "../src/components/books";
const app = () => {
  return (
    // <div>
    //   <Homescreen />
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
};
export default app;
