import React from "react";
import { ActivityIndicator } from "react-native";
import Modal from "react-native-modal";

export const Loading: React.FC = () => (
  <Modal
    className=" bg-primary bg-opacity-25 m-0 justify-center items-center"
    backdropColor="transparent"
    animationIn={"fadeIn"}
    animationOut={"fadeOut"}
    isVisible
  >
    <ActivityIndicator
      size="large"
      color={"#ffffff"}
      testID={"loading-animation"}
    />
  </Modal>
);

export default React.memo(Loading);
