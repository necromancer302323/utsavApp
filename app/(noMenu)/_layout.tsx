import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Drawer from "expo-router/drawer";
import { Text, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function layout(){
    function LeftHeader(){
        const router=useRouter()
        return  <TouchableOpacity style={{flexDirection:"row"}}
                  onPress={()=>{
                    router.push("/(tabs)")
                  }}
                  >
                  <Ionicons
                  name="chevron-back-outline"
                  size={25}
                  color="blue"
                  style={{paddingLeft:5}}
                />
                <Text style={{fontSize:17,color:"blue"}} >Go Back</Text>
                </TouchableOpacity>
                
      }
    return<GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="EndingDetails"
          options={{
            drawerLabelStyle:{
              fontFamily:"serif"
            },
            drawerLabel: "",
            headerTitle: "more Details",
            headerTitleAlign:"center",
            headerTitleStyle:{
              fontSize:25,
              fontFamily:"serif"
            },
            headerLeft:()=>(
                <LeftHeader/>
              )
          }}
        />
        <Drawer.Screen
          name="Detail"
          options={{
            drawerLabelStyle:{
              fontFamily:"serif"
            },
            drawerLabel: "",
            headerTitle: " Details",
            headerTitleAlign:"center",
            headerTitleStyle:{
              fontSize:25,
              fontFamily:"serif"
            },
            headerLeft:()=>(
                <LeftHeader/>
              )
          }}
        />

        </Drawer>
        </GestureHandlerRootView>
}