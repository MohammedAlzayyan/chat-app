import SlideOver from "@/components/SlideOver";
import ArrowRight from "@/components/svg/ArrowRight";
import BlockIcon from "@/components/svg/BlockIcon";
import CloseIcon from "@/components/svg/CloseIcon";
import DeleteIcon from "@/components/svg/DeleteIcon";
import { drawerContext } from "@/context/DrawerContext";
import React, { useContext } from "react";
import Media from "./Media";
import ContentInfo from "./ContentInfo";

const DrawerWrapper = ({ setOpenDr }) => {
  const { drawerHistory, handleDrawerHistory } = useContext(drawerContext);

  const handleDrawerChild = (component) => {
    switch (component) {
      case "Media":
        <Media />;
        break;
      case "Main":
        <ContentInfo />;
      default:
        break;
    }
  };

  return (
    <SlideOver setOpenDr={setOpenDr}>
      {/* {handleDrawerChild(drawerHistory[drawerHistory.length - 1]?.component)}
      {drawerHistory[drawerHistory.length - 1]?.component === "Media" && (
        <Media />
      )} */}
      <ContentInfo />
    </SlideOver>
  );
};

export default DrawerWrapper;
