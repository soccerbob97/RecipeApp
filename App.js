import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RecipeMenu from './screens/RecipeMenu';
import { useFonts } from "expo-font";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "./constants/theme";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeInstructions from './screens/RecipeInstructions';
import Test from './screens/Test';

const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf")
  });
  if(!loaded) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="RecipeMenu"
          component={RecipeMenu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecipeInstructions"
          component={RecipeInstructions}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
<Stack.Screen
          name="RecipeMenu"
          component={RecipeMenu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecipeInstructions"
          component={RecipeInstructions}
          options={{ headerShown: false }}
        />
*/

