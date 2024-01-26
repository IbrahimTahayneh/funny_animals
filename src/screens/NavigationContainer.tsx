import { NavigationContainer as RNNavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./WelcomeScreen";
import GenderScreen from "./GenderScreen";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

export default function NavigationContainer() {
  return (
    <RNNavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="WelcomeScreen"
          component={Welcome}
          options={{ headerShown: false, presentation: "fullScreenModal" }}
        />
        <Stack.Screen
          name="GenderScreen"
          component={GenderScreen}
          options={{ headerShown: false, presentation: "fullScreenModal" }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false, presentation: "fullScreenModal" }}
        />
      </Stack.Navigator>
    </RNNavigationContainer>
  );
}
