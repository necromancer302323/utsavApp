import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
            drawerLabel: "Home",
            headerTitle: "All events",
            headerRight: () => (
              <View style={styles.inputContainer}>
                <MaterialIcons
                  name="search"
                  size={24}
                  color="gray"
                  style={styles.icon}
                  onPress={() => {
                    console.log("hlo");
                  }}
                />
                <TextInput style={styles.input} placeholder="Search" />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="day1Events"
          options={{
          drawerIcon:({ color, size })=>(
            <Ionicons name="bookmark" size={size} color={color}  />
           ) ,
            drawerLabel: "Day 1",
            headerTitle: "Day 1",
            headerRight: () => (
              <View style={styles.inputContainer}>
                <MaterialIcons
                  name="search"
                  size={24}
                  color="gray"
                  style={styles.icon}
                  onPress={() => {
                    console.log("hlo");
                  }}
                />
                <TextInput style={styles.input} placeholder="Search" />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="day2Events"
          options={{
            drawerIcon:({ color, size })=>(
              <Ionicons name="bookmark" size={size} color={color}  />
             ) ,
            drawerLabel: "Day 2",
            headerTitle: "Day 2",
            headerRight: () => (
              <View style={styles.inputContainer}>
                <MaterialIcons
                  name="search"
                  size={24}
                  color="gray"
                  style={styles.icon}
                  onPress={() => {
                    console.log("hlo");
                  }}
                />
                <TextInput style={styles.input} placeholder="Search" />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="day3Events"
          options={{
            drawerIcon:({ color, size })=>(
              <Ionicons name="bookmark" size={size} color={color}  />
             ) ,
            drawerLabel: "Day 3",
            headerTitle: "Day 3",
            headerRight: () => (
              <View style={styles.inputContainer}>
                <MaterialIcons
                  name="search"
                  size={24}
                  color="gray"
                  style={styles.icon}
                  onPress={() => {
                    console.log("hlo");
                  }}
                />
                <TextInput style={styles.input} placeholder="Search" />
              </View>
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
