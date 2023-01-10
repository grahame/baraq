import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Flash from "./pages/Flash";
import Worksheet from "./pages/Worksheet";
import { CardProvider } from "./components/CardProvider";

const routes = (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/worksheet/:slug/:options/" element={<CardProvider child={Worksheet} />} />
            <Route path="/quiz/:slug/:options/" element={<CardProvider child={Flash} />} />
        </Routes>
    </div>
);

export default routes;
