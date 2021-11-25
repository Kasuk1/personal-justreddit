import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar/Navbar";
import { PostDetail } from "../features/postDetail/PostDetail";
import { Categories } from "../views/Main/Categories/Categories";
import { PopularPosts } from "../views/Main/PopularPosts/PopularPosts";

export const BoardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="board">
        <Routes>
          <Route path="/" element={<Categories />}></Route>
        </Routes>

        <Routes>
          <Route path="/" element={<PopularPosts />}></Route>
          <Route path="post/:postId" element={<PostDetail />}></Route>
        </Routes>
      </div>
    </>
  );
};
