import {  Image, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Events } from "@/hooks/useEvents";
import { Link } from "expo-router";
import { pressedEventState } from "@/store/PressedEvent";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";

export default function ImageCard ({Events}:{
    Events: Events
  }){
    const [SelectedEvent,setSelectedEvent]=useRecoilState(pressedEventState)
    const [readyToNavigate, setReadyToNavigate] = useState(false);

    const handleLinkPress = (event:any) => {
        if(SelectedEvent!=Events){
        event.preventDefault();
        }
        setSelectedEvent(Events);
        setReadyToNavigate(true);
      };

      useEffect(() => {
        if (SelectedEvent === Events && readyToNavigate) {
          setReadyToNavigate(false);
        }
      }, [SelectedEvent, readyToNavigate]);

    return <Pressable >
         <Link href={"/(noBottomBar)/EventDetail"} onPress={(event:any)=>{
                handleLinkPress(event); 
         }} >
        <View style={{backgroundColor:"#454545",padding:10,borderRadius:20}}>
        <Image source={{uri: Events.url}} style={styles.image}/>
        <View style={{display:"flex",flexDirection:"row", width:"100%",justifyContent:"space-between"}}>
        <ThemedText style={styles.label}>{Events.name}</ThemedText>
        <ThemedText style={styles.label}>{Events.time}</ThemedText>
        </View>
    </View>
    </Link>
    </Pressable>

    
}

export  function FullImageCard({Events}:{
    Events:Events
}){
    return <ScrollView style={{padding:10,height:"100%"}} >
   <Image source={{uri: Events.url}} style={styles.fullImage}/>
   <View style={{display:"flex",flexDirection:"row", width:"100%",justifyContent:"space-between"}}>
   <ThemedText style={styles.FullImageLabel}>{Events.name}</ThemedText>
   <ThemedText style={styles.FullImageLabel}>{Events.time}</ThemedText>
   </View>
   <ThemedText style={styles.FullImageLabel}>{Events.location}</ThemedText>
   <ThemedText style={{fontSize:25,padding:10}}>Details</ThemedText>
   <ThemedText style={styles.Details}>
    {Events.details}
   </ThemedText>
</ScrollView >
}
const styles= StyleSheet.create({
    image:{
        height:150,
        borderRadius:20,
        width:"100%"
    },
    label:{
        color:"#43A6C6",
        fontSize:20,
        marginTop:10
    },
    fullImage:{
        height:250,
        borderRadius:20,
        width:"100%"
    },
    Details:{
       fontSize:25,
       marginTop:20,
       height:"100%",
       textAlign:"center"
    },
    FullImageLabel:{
        fontSize:20,
        marginTop:10
    }
})
