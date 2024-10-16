import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { SplitView } from "@/components/SplitView";
import { useCarousel } from "@/hooks/useCarousel";
import { useEvents } from "@/hooks/useEvents";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import Carousel from "react-native-reanimated-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";


const TOPBAR_HEIGHT = 250;

export default function Events() {
  const Events = useEvents();
  const width = Dimensions.get("window").width;
  const [yOffset, setScrollY] = useState(0);
  const carouselItems = useCarousel();
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            yOffset,
            [-TOPBAR_HEIGHT, 0, TOPBAR_HEIGHT],
            [1.5, 1, 1]
          ),
        },
      ],
    };
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        yOffset,
        [-TOPBAR_HEIGHT, TOPBAR_HEIGHT / 2, TOPBAR_HEIGHT],
        [1, 1, 0]
      ),
    };
  });

  return (
    <ThemedSafeAreaView style={{ flex: 1 }}>
      <Animated.View
        style={[
          { height: Math.max(0, TOPBAR_HEIGHT - yOffset) },
          headerAnimatedStyle,
        ]}
      >
        <Carousel
          width={width}
          data={carouselItems}
          onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ index }) => (
            <>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: carouselItems[index].image }}
                  style={{ height: TOPBAR_HEIGHT }}
                />
              </View>
              <View style={{
                width:"100%",
                flexDirection:"row",
                justifyContent:"space-between",
                position:"absolute", borderRadius:20
              }}>
                <Ionicons
                onPress={()=>{
                  console.log("hlo")
                }}
                  name={"reorder-three-outline"}
                  size={25}
                  style={{
                    color: "white",
                    padding:5
                  }}/>
                  <Ionicons
                onPress={()=>{
                  console.log("hlo")
                }}
                  name={"search"}
                  size={25}
                  style={{
                    color: "white",
                    padding:5
                  }}/>
              </View>
                
              <LinearGradient
                colors={["transparent", "black"]}
                style={{
                  flex: 1,
                  position: "absolute",
                  zIndex: 10,
                  height: TOPBAR_HEIGHT / 2,
                  width: "100%",
                  bottom: 0,
                }}
              >
                <Animated.View style={textAnimatedStyle}>
                  <Text
                    style={[
                      {
                        color: "white",
                        paddingTop: TOPBAR_HEIGHT / 3,
                        textAlign: "center",
                        fontSize: 30,
                        fontWeight: "600",
                      },
                    ]}
                  >
                    {carouselItems[index].title}
                  </Text>
                </Animated.View>
              </LinearGradient>
            </>
          )}
        />
      </Animated.View>
      <SplitView
        onScroll={(yOffset) => {
          setScrollY(yOffset);
        }}
        Events={Events}
      />
    </ThemedSafeAreaView>
  );
}
