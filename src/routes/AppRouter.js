import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BoardRoutes } from "./BoardRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<BoardRoutes />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
