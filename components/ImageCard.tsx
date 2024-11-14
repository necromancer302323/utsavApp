import { Image, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { Event, FullPageEvents, useContentCatogery, useJobsCatogery,  } from "@/hooks/useEvents";
import { Href, useRouter } from "expo-router";
import { pressedEventState } from "@/store/PressedEvent";
import { useRecoilState } from "recoil";
import { SafeAreaView } from "react-native-safe-area-context";
import { EndingSplitView, SplitView } from "./SplitView";
import { useEffect } from "react";
import DataScience from "@/app/(tabs)/DataScience";
import { FlatList } from "react-native-gesture-handler";
import { ThemedView } from "./ThemedView";

export function EndingImageCard({ Event }: { Event: FullPageEvents }){
  const [SelectedEvent, setSelectedEvent] = useRecoilState(pressedEventState);
  const router = useRouter();
  const handlePress = () => {
    setSelectedEvent(Event);
    router.push("/(noMenu)/EndingDetails" as Href<string | object>);
  };
  return (
    <Pressable onPress={handlePress}>
        <Image src={Event.url} style={styles.image} />
        <ThemedText style={styles.label}>{Event.name}</ThemedText>
    </Pressable>
  );
}

export  function ImageCard({ Event }: { Event: FullPageEvents }) {
  const [SelectedEvent, setSelectedEvent] = useRecoilState(pressedEventState);
  const router = useRouter();
  const handlePress = () => {
    setSelectedEvent(Event);
    router.push("/(noMenu)/Detail" as Href<string | object>);
  };
  return (
    <Pressable onPress={handlePress}>
        <Image src={Event.url} style={styles.image} />
        <ThemedText style={styles.label}>{Event.name}</ThemedText>
    </Pressable>
  );
}


export function FullViewImageCard({ Event,goTo }: { Event: Event|FullPageEvents,goTo:string }) {
  const [SelectedEvent, setSelectedEvent] = useRecoilState(pressedEventState);
  const router = useRouter();
  const handlePress = () => {
    setSelectedEvent(Event);
    router.push(goTo as Href<string | object>);
  };
  return (
    <Pressable onPress={handlePress} >
        <Image src={Event.url} style={styles.FullViewImage} />
    </Pressable>
  );
}


export  function FullImageCard({ Events,DataOf }: { Events: FullPageEvents,DataOf:string}) {
  const data=useContentCatogery(DataOf =="Ai"?"Ai":(DataOf=="data science")?"DataScience":(DataOf=="coding")?"coding":"MultiMedia")
  const dataForJobs=useJobsCatogery(DataOf =="Ai"?"Ai":(DataOf=="data science")?"DataScience":(DataOf=="coding")?"coding":"MultiMedia")
  return (
    <ScrollView style={{ padding:10}}
    contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
    >
      <Image src={Events.url}  style={styles.fullImage} />
        <ThemedText style={styles.FullImageLabel}>{Events.name}</ThemedText>
        <ThemedText style={styles.Details}
      >{Events.details}</ThemedText>
      <EndingSplitView
        fontSize={20} 
      Events={data as FullPageEvents[] }arrayOfEvents={["SkillDepartment"]} name={`application of ${DataOf} :`} />
  
       <EndingSplitView
        fontSize={20} 
      Events={dataForJobs as FullPageEvents[] }arrayOfEvents={["SkillDepartment"]} name={`Educational Pathways after 12th in ${DataOf} :`} />
       <EndingSplitView
        fontSize={20} 
      Events={dataForJobs as FullPageEvents[] }arrayOfEvents={["SkillDepartment"]} name={`Companys hiring in ${DataOf} :`} />
    </ScrollView>
  ) 
}

export  function EndingFullImageCard({ Events,DataOf }: { Events: FullPageEvents,DataOf:string}) {
 return (
  <ScrollView style={{ 
    padding: 10
  }}
  contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }}
  >
    <Image src={Events.url}  style={styles.fullImage} />
      <ThemedText style={styles.FullImageLabel}>{Events.name}</ThemedText>
      <ThemedText style={styles.Details}
    >{Events.details}</ThemedText>
  </ScrollView>
);
}

const styles = StyleSheet.create({
  image: {
    height: 140,
    borderRadius: 20,
    width:190,
  },
  label: {
    fontSize: 20,
    paddingTop: 10,
    color: "black",
    fontFamily:"serif",
    paddingLeft:5,
    textAlign:"center"
  },
  fullImage: {
    height: 250,
    borderRadius: 20,
    width: "100%",
    marginBottom:2
  },
  Details: {
    fontSize: 20,
    paddingTop: 10,
    color: "#606060",
    letterSpacing:2,
    fontFamily:"serif",
    marginLeft:5,
    justifyContent:"center",
    lineHeight: 35
  
  },
  FullImageLabel: {
    fontSize: 26,
    paddingTop: 10,
    color: "black",
    textAlign:"center",
    width:"100%"
  },
  FullViewImage:{
    height:280,
    borderRadius: 20,
    marginTop:25,
  },
  FullViewLable:{
    fontSize: 25,
    paddingTop: 10,
    color: "black",
    textAlign:"center",
    fontFamily:"serif",
    width:"100%"
  },
  container: {
    flexDirection: "row",
    flex: 1,
},
innerContainer: {
    flex: 1,
    padding: 10,
},
imageContainer: {
    paddingVertical: 10
}
});
