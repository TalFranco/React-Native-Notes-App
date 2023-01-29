import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import { StyleSheet } from "react-native";
import React from "react";
import { theme } from "./custom-theme .json";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryPage from "./Pages/CategoryPage";
import AddNotePage from "./Pages/AddNotePage";
import HomePage from "./Pages/HomePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="My Notes">
            <Stack.Screen name="Notes list" component={CategoryPage} />
            <Stack.Screen name="Add Note" component={AddNotePage} />
            <Stack.Screen name="My Notes" component={HomePage} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    display: "flex",
  },
});
