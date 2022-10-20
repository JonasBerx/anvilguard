import { Routes, Route } from "react-router-dom";
import paths from "./paths";
import Home from "../components/Home";
import About from "../components/about/About";
import Login from "../components/login/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={paths.ABOUT_PATH} element={<About />} />
      <Route path={paths.LOGIN_PATH} element={<Login />} />
    </Routes>
  )
}
export default AppRouter;
