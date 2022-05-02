import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Context } from "../index";
import {Shop} from "../pages/Shop";
import { authRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
  const { user } = useContext(Context);
  const newLocal = <Route path="*" element={<Shop />} />;

  return (
    <Routes>
      {user.isAuth && authRoutes.map(({ path, Component }) => 
          <Route key={path} path={path} element={<Component />} exact/>
      )}

      {publicRoutes.map(({ path, Component }) => 
        <Route key={path} path={path} element={<Component />} exact/>
      )}

      {newLocal}
    </Routes>
  );
};

export default AppRouter;
