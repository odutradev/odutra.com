import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";

import Main from '../pages/main';
import LinksPage from "../pages/links";


  export const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/links" element={<LinksPage />}/>
        </Routes>
      </BrowserRouter>
    )
  }


  export default Router