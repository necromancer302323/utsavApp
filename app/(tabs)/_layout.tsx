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
                  console.log("menu");
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
