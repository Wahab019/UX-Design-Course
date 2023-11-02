import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "./App.css";
import { Footer, Header } from "./components";
import { Course } from "./pages";
import Aos from "aos";
import 'aos/dist/aos.css'



const Layout = () => {
  return (
    <>
      <div className="">
        <Header />
      </div>

      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      
      {
        path: "/",
        element: <Course />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}



export default App;
