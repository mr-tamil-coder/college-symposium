import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import Error from "./Components/Error.jsx";
import Footer from "./Components/Footer.jsx";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Body from "./Components/Body.jsx";
import TechEvent from "./Components/TechEvent.jsx";
import EventContainer from "./Components/EventContainer.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <Body />,
      errorElement: <Error />,
    },
    {
      path: "/events",
      element: <EventContainer />,
    },
    {
      path: "/events/tech",
      element: <TechEvent />,
    }
  
  ],
    
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={appRouter} />
  </>
);
