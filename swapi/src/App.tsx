import { RouteObject, useRoutes } from "react-router-dom";
import { Layout } from "./components/Layout";

function App() {

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/:id",
          element: <div>id</div>,
        },
      ],
    },
    {
      path: "*",
      element: <div>404</div>,
    }
  ];

  const element = useRoutes(routes);


  return (
    <>
      {element}
    </>
  );
}

export default App;
