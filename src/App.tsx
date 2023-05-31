import { RouteObject, useRoutes } from "react-router-dom";
import { Layout } from "./components/Layout";
import PersonResults from "./components/organisms/PersonResults/PersonResults";

function App() {

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "people/:peopleId",
          element: <PersonResults/>,
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
