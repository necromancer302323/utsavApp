import { useEvents } from "@/hooks/useEvents";
import { atom } from "recoil";
const wallpaper=useEvents()
export const pressedEventState = atom({
    key: 'PressedEventStatea',
    default: {
        url:"",
        name:"",
        time:"",
        location:"",
        details:""
    }
  });