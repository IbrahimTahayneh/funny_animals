/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import SharedController from "../utils/SharedController";
import { Screen, AnimalModal } from "../components";
import { images } from "../assets";
import { animals } from "../data";
import { Animal } from "../types";

type Animal = Animal.AnimalType;

const HomeScreen: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const [buttonColor, setButtonColor] = useState<string>("");
  const [, setVictorColor] = useState<string>("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  useEffect(() => {
    void checkColor();
  }, []);

  const checkColor = async () => {
    try {
      const gender = await SharedController.getGender();
      if (gender === "Male") {
        setBackgroundColor("#00A3FF");
        setButtonColor("#1384C5");
        setVictorColor("#B6DEF5");
      } else {
        setBackgroundColor("#E1A1C1");
        setButtonColor("#CD558E");
        setVictorColor("#EDB1CD");
      }
    } catch (error) {
      console.error("Error checking color:", error);
    }
  };

  const renderItem = ({ item }: { item: Animal }) => (
    <>
      <TouchableOpacity
        onPress={() => showModal(item)}
        className="w-[179px] h-[184px] bg-white rounded-xl p-5 mx-3 my-5"
      >
        <Image
          source={item.image}
          className="w-full h-full"
          resizeMode="contain"
        />

        <View
          style={[
            styles.buttonContainerr,
            {
              backgroundColor: buttonColor,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            },
          ]}
        >
          <Text style={styles.buttonTextt}>{item.name}</Text>
          <Image source={images.victor5} style={[styles.victorIcon, {}]} />
        </View>
      </TouchableOpacity>
    </>
  );

  const showModal = (animal: Animal) => {
    setSelectedAnimal(animal);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <Screen
      style={{
        backgroundColor: backgroundColor,
      }}
      withHeader
      headerTitle={"Funny Animals"}
      headerColor={backgroundColor}
      headerLeftComponent={<Image source={images.Icon} className="mx-4 mb-1" />}
      headerRightComponent={<Image source={images.InfoIcon} className="mx-4" />}
    >
      <FlatList
        data={animals}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
        contentContainerStyle={styles.gridViewContainer}
        showsVerticalScrollIndicator={false}
      />
      {selectedAnimal && modalVisible && (
        <AnimalModal
          isVisable={modalVisible}
          animal={selectedAnimal}
          backgroundColor={backgroundColor}
          onClose={closeModal}
        />
      )}
    </Screen>
  );
};
const styles = StyleSheet.create({
  gridViewContainer: {
    padding: 15,
    color: "white",
  },
  gridItemContainer: {
    marginVertical: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    width: 179,
    height: 184,
    overflow: "hidden",
    backgroundColor: "white",
  },

  buttonContainerr: {
    height: 39,
    width: 119,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "transparent",
  },
  buttonTextt: {
    fontSize: 24,
    color: "white",
  },
  victorIcon: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 0,
    right: 0,
    margin: 3,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  modalText: {
    // fontFamily: "hekaya",
    fontSize: 24,
    color: "white",
    marginBottom: 10,
  },
  closeButton: {
    // fontFamily: "hekaya",
    fontSize: 18,
    color: "white",
    textDecorationLine: "underline",
  },
  dialogContainer: {
    elevation: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
  },
  dialogContent: {
    width: 300,
    height: 300,
    paddingBottom: 10,
    alignItems: "center",
  },
  cloud1: {
    position: "absolute",
    top: 0,
    right: 10,
    width: 85,
    height: 85,
  },
  victor6: {
    position: "absolute",
    top: 5,
    left: 10,
    width: 60,
    height: 60,
  },
  cloud2: {
    position: "absolute",
    top: 140,
    left: 10,
    width: 60,
    height: 60,
  },
  dialogImage: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
  },
  button: {
    width: 110,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    // fontFamily: "hekaya",
    fontSize: 26,
    color: "white",
  },
  victor5: {
    width: 20,
    height: 20,
    marginLeft: 5,
    tintColor: "#FFF0DA",
  },
});

export default HomeScreen;
