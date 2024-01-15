/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TouchableOpacity, View, Text } from "react-native";
import { Screen } from "../components";
import VictorOne from "../assets/images/VictorOne";
import VictorTwo from "../assets/images/VictorTwo";
import VictorThree from "../assets/images/VictorThree";
import VictorFour from "../assets/images/VictorFour";
import BackgroundButton from "../assets/images/BackgroundButton";
import CWord from "../assets/images/CWord";

export default function Welcome() {
  return (
    <Screen className="bg-primary justify-center items-center flex-1">
      <View className="h-[70] mt-[70] justify-center items-center flex-1">
        <CWord />
        <TouchableOpacity>
          <View className=" h-[66] w-[308] rounded-xl bg-white items-center justify-center  relative">
            <BackgroundButton />
            <VictorOne />
            <VictorTwo />
            <VictorThree />
            <VictorFour />
            <Text
              style={{ fontSize: 34, color: "white", position: "absolute" }}
            >
              Get started
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}
