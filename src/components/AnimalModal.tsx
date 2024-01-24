/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Audio } from "expo-av";
import { useState, useEffect } from "react";
import {
  Modal,
  TouchableOpacity,
  Vibration,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { images } from "../assets";
import { Animal } from "../types";
import SharedController from "../utils/SharedController";

type Animal = Animal.AnimalType;

export const AnimalModal: React.FC<{
  animal: Animal;
  backgroundColor: string;
  onClose: () => void;
  isVisable: boolean;
}> = ({ animal, backgroundColor, onClose, isVisable }) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [buttonColor, setButtonColor] = useState<string>("");

  const checkColor = async () => {
    try {
      const gender = await SharedController.getGender();
      setButtonColor(gender === "Male" ? "#FFAD37" : "#32B2B5");
    } catch (error) {
      console.error("Error checking color:", error);
    }
  };

  const playSound = async () => {
    console.log("Loading Sound");
    try {
      const { sound } = await Audio.Sound.createAsync(animal.sound);
      setSound(sound);

      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          Vibration.cancel();
        }
      });

      console.log("Playing Sound");
      await sound.playAsync();
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          void sound.unloadAsync();
          Vibration.cancel();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    void checkColor();
  }, []);

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isVisable}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.dialogContainer}>
          <View
            style={[styles.dialogContent, { backgroundColor: backgroundColor }]}
          >
            <Image source={images.cloud1} style={styles.cloud1} />
            <Image source={images.victor6} style={styles.victor6} />
            <Image source={images.cloud2} style={styles.cloud2} />
            <Image source={animal.image} style={styles.dialogImage} />
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: buttonColor,
                },
              ]}
              onPress={() => playSound()}
            >
              <Text style={styles.buttonText}>{animal.name}</Text>
              <Image source={images.victor5} style={styles.victor5} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
const styles = StyleSheet.create({
  dialogContainer: {
    borderRadius: 20,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  dialogContent: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 340,
    height: 400,
  },
  cloud1: {
    position: "absolute",
    top: 10,
    right: 100,
    width: 110,
  },
  victor6: {
    position: "absolute",
    top: 20,
    left: 10,
    width: 60,
    height: 60,
  },
  cloud2: {
    position: "absolute",
    top: 50,
    left: 240,
  },
  dialogImage: {
    resizeMode: "cover",
  },
  button: {
    height: 39,
    width: 119,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    bottom: 30,
    position: "absolute",
  },
  buttonText: {
    fontSize: 26,
    color: "white",
  },
  victor5: {
    width: 20,
    height: 20,
    tintColor: "#FFF0DA",
    position: "absolute",
    top: 0,
    right: 0,
    margin: 3,
  },
});

export default AnimalModal;
