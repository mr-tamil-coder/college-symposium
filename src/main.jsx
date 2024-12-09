import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import Error from "./Components/Error.jsx";
import Footer from "./Components/Footer.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body.jsx";
import TechEvent from "./Components/TechEvent.jsx";
import EventContainer from "./Components/EventContainer.jsx";
import EventDetails from "./Components/EventDetails.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Circuit from "./Components/Circuit.jsx";
import CircuitTec from "./Components/CircuitTec.jsx"
import CircuitnTech from "./Components/CircuitnTech.jsx"
import NonCircuitTec from "./Components/NonCircuitTec.jsx";
import NonCircuitnTech from "./Components/NonCircuitnTech.jsx";
import NonCircuit from "./Components/NonCircuit.jsx";
import NewAbout from "./Components/NewAbout.jsx";
import Tracks from "./Components/Tracks.jsx";
import EventDescription from "./Components/EventDescription.jsx";
import Eloquence from "./Components/EventDescriptions/Eloquence.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/events",
        element: <EventContainer />,
      },
      {
        path: "/description",
        element: <EventDescription />,
      },
      {
        path: "/eloquence",
        element: <Eloquence />,
      },
      {
        path: "/circuit",
        element: <Circuit />,
      },
      {
        path: "/events/circuit",
        element: <Circuit />,
      },
      {
        path: "/events/circuit-tech",
        element: <CircuitTec />,
      },
      {
        path: "/events/circuit-non-tech",
        element: <CircuitnTech />,
      },
      {
        path: "/events/non-circuit",
        element: <NonCircuit />,
      },
      {
        path: "/events/non-circuit-tech",
        element:<NonCircuitTec />,
      },
      {
        path: "/events/non-circuit-non-tech",
        element: <NonCircuitnTech />,
      },

      {
        path: "/about",
        element: <NewAbout />
      },
      {
        path: "/events/tech",
        element: <TechEvent />,
      },
      {
        path: "/events/tech/:id",
        element: <EventDetails />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={appRouter} />
  </>
);
