import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" 
          options={{
            drawerLabel: "Home",
            headerTitle: "",
            headerRight: () => (
              <Ionicons
                onPress={() => {
                  console.log("Search bar");
                }}
                name={"search"}
                size={25}
                style={{
                  color: "#007aff",
                  paddingRight: 15,
                }}
              />
            ),
          }}
        />
         <Drawer.Screen
          name="day1Events" 
          options={{
            drawerLabel: "Day 1",
            headerTitle: "Day 1",
            headerRight: () => (
              <Ionicons
                onPress={() => {
                  console.log("Search bar");
                }}
                name={"search"}
                size={25}
                style={{
                  color: "#007aff",
                  paddingRight: 15,
                }}
              />
            ),
          }}
        />
         <Drawer.Screen
          name="day2Events" 
          options={{
            drawerLabel: "Day 2",
            headerTitle: "Day 2",
            headerRight: () => (
              <Ionicons
                onPress={() => {
                  console.log("Search bar");
                }}
                name={"search"}
                size={25}
                style={{
                  color: "#007aff",
                  paddingRight: 15,
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="day3Events" 
          options={{
            drawerLabel: "Day 3",
            headerTitle: "Day 3",
            headerRight: () => (
              <Ionicons
                onPress={() => {
                  console.log("Search bar");
                }}
                name={"search"}
                size={25}
                style={{
                  color: "#007aff",
                  paddingRight: 15,
                }}
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
