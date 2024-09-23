import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Pages";
import navRoutes from "./Routes/routes";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";

interface routeType {
  path: string;
  component: React.FC;
}

const App = () => {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              {navRoutes?.map((route: routeType, index: number) => {
                const routProps = {
                  path: route.path,
                  Component: route.component,
                };
                if (index === 0) {
                  return (
                    <Route index key={route.path + index} {...routProps} />
                  );
                } else {
                  return <Route key={route.path + index} {...routProps} />;
                }
              })}
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </RecoilRoot>
  );
};

export default App;
