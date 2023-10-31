import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import NotFound from "../pages/notFound/notFound";

interface RouteType {
  path: string;
  element: JSX.Element;
  children?: RouteType[];
}

const routes: RouteType[] = [
  {
    path: '/',
    element: <Home />,
    // children: [
    //   {
    //     path: 'about'
    //     element: <About />
    //   }
    // ]
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => <Route key={route.path} path={route.path} element={route.element}></Route>)}
      </Routes>
    </Router>
  );
}