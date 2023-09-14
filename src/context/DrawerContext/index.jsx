import { createContext, useState } from "react";

export const drawerContext = createContext();

export const DrawerContext = ({ children }) => {
  const [drawerHistory, setDrawerHistory] = useState([]);

  const handleDrawerHistory = (component) => {
    // if (drawerHistory.component === component) {
    //   setDrawerHistory({
    //     component: component,
    //   });
    // }

    if (drawerHistory[drawerHistory.length - 1]?.component === component)
      return;

    let newDrawerHistory = [...drawerHistory, { component: component }];

    console.log(newDrawerHistory);
    console.log(
      drawerHistory[drawerHistory.length - 1]?.component === component
    );
    console.log(component);

    setDrawerHistory(newDrawerHistory);
  };

  const handleDrawerBack = () => {
    setDrawerHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const value = {
    drawerHistory,
    setDrawerHistory,
    handleDrawerHistory,
    handleDrawerBack,
  };

  return (
    <drawerContext.Provider value={value}>{children}</drawerContext.Provider>
  );
};

export default DrawerContext;
