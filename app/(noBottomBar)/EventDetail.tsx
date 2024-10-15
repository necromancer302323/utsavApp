import ImageCard, { FullImageCard } from "@/components/ImageCard";
import { pressedEventState } from "@/store/PressedEvent";
import { Text, View, SafeAreaView } from "react-native";
import { useRecoilState } from "recoil";
export default function EventDeatils(){
    const [SelectedEvent,setSelectedEvent]=useRecoilState(pressedEventState)
    console.log(SelectedEvent)
    return <SafeAreaView>
        <FullImageCard Events={SelectedEvent}></FullImageCard>
    </SafeAreaView>
}