import { ThemedView } from "./ThemedView";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import  { EndingImageCard, FullViewImageCard,ImageCard } from "./ImageCard";
import { Event, FullPageEvents } from "@/hooks/useEvents";
import { Ionicons } from "@expo/vector-icons";
import { Href , useRouter } from "expo-router";


export interface allTypesOFEvents{
  url:string
  name:string
  details:string
}
export function EndingSplitView({Events,arrayOfEvents,name,fontSize}: {
  Events:FullPageEvents[]
  arrayOfEvents:allTypesOFEvents[]
  name:string
  fontSize:number
}){
  const route=useRouter()
  return (
    <View >
    {arrayOfEvents.map((item) => {
      return (
        <View key={Math.random()} style={{ paddingTop: 40, padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              
            }}
          >
            <Text style={{ fontSize: fontSize,fontFamily:"serif" }}>{name}</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, paddingBottom:10 }}
            horizontal
            data={Events}
            renderItem={({ item, index }) => (
              <ThemedView style={styles.container}>
                <ThemedView style={styles.innerContainer}>
                    <EndingImageCard Event={item} />
                </ThemedView>
              </ThemedView>
            )}
            keyExtractor={(item) => item.name}
          />
        </View>
      );
    })}
  </View>
  )
}
export function SplitView({Events,arrayOfEvents,name,fontSize}: {
  Events:FullPageEvents[]
  arrayOfEvents:allTypesOFEvents[]
  name:string
  fontSize:number
}) {
  const route=useRouter()
  return (
    <View >
      {arrayOfEvents.map((item) => {
        return (
          <View key={Math.random()} style={{ paddingTop: 40, padding: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                
              }}
            >
              <Text style={{ fontSize: fontSize,fontFamily:"serif" }}>{name}</Text>
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1, paddingBottom:10 }}
              horizontal
              data={Events}
              renderItem={({ item, index }) => (
                <ThemedView style={styles.container}>
                  <ThemedView style={styles.innerContainer}>
                      <ImageCard Event={item} />
                  </ThemedView>
                </ThemedView>
              )}
              keyExtractor={(item) => item.name}
            />
          </View>
        );
      })}
    </View>
  );
}

export function FullView({Events,onScroll}: {
  Events: Event[];
  onScroll?: (yOffset: number) => void;
}){
  return<FlatList
  onScroll={(e) => {
    let yOffset = e.nativeEvent.contentOffset.y / 1;
    onScroll?.(yOffset);
}}
      data={Events as ArrayLike<Event>}
      renderItem={({item,index}) => <ThemedView >
          <ThemedView style={styles.fullViewInnerContainer}>
              <FullViewImageCard goTo="/(noMenu)/Details"  Event={Events[index]} />
          </ThemedView>
      </ThemedView>

      }
      keyExtractor={item=> item.name}
  />

}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginRight: 10,
  },
  innerContainer: {
    flexDirection:"row",
    padding: 10,
    backgroundColor: "rgb(240,240,240)",
    flexWrap:"wrap",
    width:200

  },
  fullViewInnerContainer:{
    flexDirection:"row",
    padding: 10,
    backgroundColor: "rgb(240,240,240)",
    flexWrap:"wrap",
  }
});
