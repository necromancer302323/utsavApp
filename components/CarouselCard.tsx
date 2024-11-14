import { useCarousel } from "@/hooks/useCarousel";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Animated, Dimensions, Image, Text, View } from "react-native";
import { interpolate, useAnimatedStyle } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

const TOPBAR_HEIGHT = 250;
export function CarouselCard(){
    const width = Dimensions.get("window").width;
    const [yOffset, setScrollY] = useState(0);
    const carouselItems = useCarousel();

    const textAnimatedStyle = useAnimatedStyle(() => {
        return {
          opacity: interpolate(
            yOffset,
            [-TOPBAR_HEIGHT, TOPBAR_HEIGHT / 2, TOPBAR_HEIGHT],
            [1, 1, 0]
          ),
        };
      });
    return  <Animated.View
    style={[
      { height: Math.max(0, TOPBAR_HEIGHT - yOffset) }
    ]}
  >
    <Carousel
      width={width}
      data={carouselItems}
      onSnapToItem={(index) => console.log("current index:",  index)}
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
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              position: "absolute",
              borderRadius: 20,
            }}
          ></View>

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
            <Animated.View >
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
}