import { Home, Profile, SignIn, SignUp } from "@/pages";
import { Footer } from "./widgets/layout";
import { element } from "prop-types";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "About Us",
    path: "/profile",
    element: <Profile />,
  },
  {
    name:"Contact Us",
    path:"/contact-us",
    element:<Footer></Footer>

  },
  
];

export default routes;
