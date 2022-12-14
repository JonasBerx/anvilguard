import { Routes, Route } from "react-router-dom";
import paths from "./paths";
import Home from "../components/Home";
import About from "../components/about/About";
import Login from "../components/login/Login";
import LogOut from "../components/login/LogOut";
import ArticleBox from '../components/article/ArticleBox'
import Cookies from 'js-cookie'

const AppRouter = () => {
  return (
    <Routes>
      <Route path={paths.HOME_PATH} element={<Home />} />
      <Route path={paths.ABOUT_PATH} element={<About />} />
      <Route path={paths.LOGIN_PATH} element={<Login />} />
      <Route path={paths.ARTICLE_PATH} element={<ArticleBox />} />
      <Route path="/login/authenticate" component={() => { window.location.href = "http://localhost:3000/auth"; return null }} />
      <Route path="/logout" element={<LogOut />} />
    </Routes>
  )
}
export default AppRouter;
