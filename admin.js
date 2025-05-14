import domReady from "@wordpress/dom-ready";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import DashBoard from "./componets/DashBoard";
import router from "./componets/Router";

domReady(() => {
  const domNode = document.getElementById("admin_menu_root");
  const root = createRoot(domNode);

  root.render(<RouterProvider router={router}><DashBoard/></RouterProvider>);
});
