// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppContainer } from "./src";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   "Andika-Regular": require("./src/assets/fonts/Andika-Regular.ttf"),
  //   hekaya: require("./src/assets/fonts/hekaya.ttf"),
  // });
  // const handleOnLayout = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync(); //hide the splashscreen
  //   }
  // }, [fontsLoaded]);
  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <SafeAreaProvider
    // onLayout={handleOnLayout}
    >
      <AppContainer />
    </SafeAreaProvider>
  );
}
