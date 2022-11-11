import { createBrowserRouter } from "react-router-dom";

import Home from "./screens/home";
import User from "./screens/user";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import Users from "./screens/users";

import ErrorComponent from "./components/ErrorComponent";
import Chart from "./screens/chart";
import Price from "./screens/price";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },

      {
        path: "users/:userId",
        element: <Users />,
        errorElement: <ErrorComponent />,
        children: [
          {
            path: "chart",
            element: <Chart />,
          },
          {
            path: "price",
            element: <Price />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);
// function Router() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/About" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default router;
