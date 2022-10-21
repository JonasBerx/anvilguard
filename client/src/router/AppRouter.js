import { Routes, Route } from "react-router-dom";
import paths from "./paths";
import Home from "../components/Home";
import About from "../components/about/About";
import Login from "../components/login/Login";
import ArticleBox from '../components/article/ArticleBox'

const AppRouter = () => {
  return (
    <Routes>
      <Route path={paths.HOME_PATH} element={<Home />} />
      <Route path={paths.ABOUT_PATH} element={<About />} />
      <Route path={paths.LOGIN_PATH} element={<Login />} />
      <Route path={paths.ARTICLE_PATH} element={<ArticleBox />} />
      <Route path="/login/authenticate" component={() => { window.location.href = "http://localhost:3000/auth"; return null }} />
    </Routes>
  )
}
export default AppRouter;
