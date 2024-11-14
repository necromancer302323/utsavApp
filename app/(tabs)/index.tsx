import {
  Dimensions,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { allTypesOFEvents, SplitView } from "@/components/SplitView";
import { useCarousel } from "@/hooks/useCarousel";
import {  useSkillDepartment } from "@/hooks/useEvents";
import Carousel from "react-native-reanimated-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { CarouselCard } from "@/components/CarouselCard";

const TOPBAR_HEIGHT = 250;

export default  function Events() {
  const Events =  useSkillDepartment();
  const ArrayOfEvents: allTypesOFEvents[] = [
    "SkillDepartment"
 ];
  return (
<>
    <ScrollView >
     <CarouselCard/>
      <SplitView
      fontSize={20}
      arrayOfEvents={ArrayOfEvents}
        Events={Events}
        name="Skill Department"
      />
      </ScrollView>
</>
  );
}
