import { createDrawerNavigator } from "@react-navigation/drawer";
import {  Slot, Stack } from "expo-router"
import {  GestureHandlerRootView } from "react-native-gesture-handler"
import { RecoilRoot } from "recoil"


export default function Layout(){
    return<RecoilRoot>
    <GestureHandlerRootView>
    <Stack screenOptions={{
            headerShown:false,
        }}>
       <Stack.Screen name="(noMenu)/EventDetail" 
         options={{headerShown:true,
            headerTitle:"Event",
            headerBackTitle:"Go Back"
          }} 
          />
         </Stack>

         </GestureHandlerRootView>
         </RecoilRoot>
}

 
