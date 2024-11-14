import  { FullImageCard } from "@/components/ImageCard";
import { SplitView } from "@/components/SplitView";
import { FullPageEvents, useContentCatogery } from "@/hooks/useEvents";
import { pressedEventState } from "@/store/PressedEvent";
import {  SafeAreaView, Text } from "react-native";
import { useRecoilState } from "recoil";
export default  function EventDeatils(){
    const [SelectedEvent,setSelectedEvent]=useRecoilState(pressedEventState)
    return<SafeAreaView>
        <FullImageCard 
        DataOf={SelectedEvent.name}
        Events={SelectedEvent}
        ></FullImageCard>
    </SafeAreaView>
}