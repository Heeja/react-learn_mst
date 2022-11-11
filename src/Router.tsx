import { createBrowserRouter } from "react-router-dom";

import Home from "./screens/home";
import About from "./screens/about";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import Users from "./screens/users";

import ErrorComponent from "./components/ErrorComponent";
import Followers from "./screens/followers";

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
        path: "about",
        element: <About />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "users/:userId",
        element: <Users />,
        errorElement: <ErrorComponent />,
        children: [
          {
            path: "followers",
            element: <Followers />,
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
