import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import Chatroom from "./Chatroom";
import { SignIn, SignUp } from "./pages";
import DashboardHome from "./components/DashBoard";
import DashboardLayout from "./components/DashBoardlayout";
import Profile from "./components/Profile";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      {!(pathname == '/signin' || pathname == '/signup') && (
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={routes} />
        </div>
      )
      }
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/chatroom' element={<Chatroom></Chatroom>}></Route>
        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="home" element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
