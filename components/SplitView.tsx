import { ThemedView } from "./ThemedView"
import { View, StyleSheet, FlatList } from "react-native"
import ImageCard from "./ImageCard";
import { Events } from "@/hooks/useEvents";
import { pressedEventState } from "@/store/PressedEvent";
import { useRecoilState } from "recoil";
import { Link } from "expo-router";


export function SplitView({Events, onScroll}: {
    Events: Events[];
    onScroll?: (yOffset: number) => void;
}) {
    return <>
            <FlatList
                onScroll={(e) => {
                    let yOffset = e.nativeEvent.contentOffset.y / 1;
                    onScroll?.(yOffset);
                }}
                data={Events}
                renderItem={({item,index}) => <ThemedView style={styles.container}>
                    <ThemedView style={styles.innerContainer}>
                        <View style={styles.imageContainer}>
                        <ImageCard  Events={Events[index]} /></View>
                    </ThemedView>
                </ThemedView>

                }
                keyExtractor={item=> item.name}
            />
    </>
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 10,
        backgroundColor:" rgb(0,0,0)"
    },
    imageContainer: {
        paddingVertical: 10
    }
})