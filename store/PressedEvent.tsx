import { useEvents } from "@/hooks/useEvents";
import { atom } from "recoil";
const wallpaper=useEvents()
export const pressedEventState = atom({
    key: 'PressedEventStatea',
    default: {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/wh-xGfckSVu2znesoqOE-g",
        name: "anime",
        time:"10:00-11:30",
        location:"Assembly area 1",
        details:"hjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhagsdjh"
    }
  });