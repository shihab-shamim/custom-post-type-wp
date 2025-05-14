import { createHashRouter } from "react-router-dom";
import DashBoard from "./DashBoard";
import About from "./About";
import Setting from "./Setting";

const router = createHashRouter([
  {
    path: "/",
    element: <DashBoard />,
    children: [
      {
        path: "about",   
        element: <About />,
      },
      {
        path: "setting", 
        element: <Setting/>,
      }
    ],
  },
]);

export default router;