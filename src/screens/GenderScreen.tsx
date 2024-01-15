/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SharedController from "../utils/SharedController";
import { CustomGender } from "../components/CustomeGender";
import Female from "../assets/images/Female";
import Male from "../assets/images/Male";
import { Screen } from "../components";
import VictorOne from "../assets/images/VictorOne";
import VictorTwo from "../assets/images/VictorTwo";
import VictorThree from "../assets/images/VictorThree";
import VictorFour from "../assets/images/VictorFour";
import BackgroundButton from "../assets/images/BackgroundButton";

const GenderScreen: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleGenderSelection = (index: number) => {
    setSelectedIndex(index);
  };

  const handleContinue = async () => {
    const selectedGender = selectedIndex === 0 ? "Female" : "Male";
    await SharedController.saveGender(selectedGender);
    await SharedController.isSelectedGender(true);
  };

  return (
    <Screen className="flex-1 items-center justify-center">
      <Text className="text-3xl py-10">Choose your gender</Text>
      <CustomGender
        isSelected={selectedIndex === 0}
        onPress={() => handleGenderSelection(0)}
        backgroundColor="#FD92C9"
        ImageComponents={<Female />}
      />
      <Text className="text-3xl  py-7">Female</Text>
      <CustomGender
        isSelected={selectedIndex === 1}
        onPress={() => handleGenderSelection(1)}
        backgroundColor="#4CB1EA"
        ImageComponents={<Male />}
      />
      <Text className="text-3xl py-7">Male</Text>
      <TouchableOpacity onPress={handleContinue}>
        <View className=" h-[66] w-[308] rounded-xl bg-white items-center justify-center  relative">
          <BackgroundButton />
          <VictorOne />
          <VictorTwo />
          <VictorThree />
          <VictorFour />
          <Text style={{ fontSize: 34, color: "white", position: "absolute" }}>
            Continue
          </Text>
        </View>
      </TouchableOpacity>
    </Screen>
  );
};

export default GenderScreen;
