import { Image, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { Events } from "@/hooks/useEvents";
import { useRouter } from "expo-router";
import { pressedEventState } from "@/store/PressedEvent";
import { useRecoilState } from "recoil";

export default function ImageCard({Events}: {
    Events: Events
}) {
    const [SelectedEvent, setSelectedEvent] = useRecoilState(pressedEventState);
    const router = useRouter();

    const handlePress = () => {
        setSelectedEvent(Events);
        router.push('/(noMenu)/EventDetail');
    };

    return (
        <Pressable onPress={handlePress}>
            <View style={{backgroundColor:"#C0C0C0", padding:10, borderRadius:20, width:"100%"}}>
                <Image source={{uri: Events.url}} style={styles.image}/>
                <View style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"space-between"}}>
                    <ThemedText style={styles.label}>{Events.name}</ThemedText>
                    <ThemedText style={styles.label}>{Events.time}</ThemedText>
                </View>
            </View>
        </Pressable>
    );
}

export function FullImageCard({Events}: {
    Events: Events
}) {
    return (
        <ScrollView style={{padding:10, height:"100%"}}>
            <Image source={{uri: Events.url}} style={styles.fullImage}/>
            <View style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"space-between"}}>
                <ThemedText style={styles.FullImageLabel}>{Events.name}</ThemedText>
                <ThemedText style={styles.FullImageLabel}>{Events.time}</ThemedText>
            </View>
            <ThemedText style={styles.FullImageLabel}>{Events.location}</ThemedText>
            <ThemedText style={{fontSize:25, padding:10, color:"black"}}>Details</ThemedText>
            <ThemedText style={styles.Details}>
                {Events.details}
            </ThemedText>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        borderRadius: 20
    },
    label: {
        fontSize: 20,
        marginTop: 10,
        color: "black"
    },
    fullImage: {
        height: 250,
        borderRadius: 20,
        width: "100%"
    },
    Details: {
        fontSize: 25,
        marginTop: 20,
        height: "100%",
        textAlign: "center",
        color: "black"
    },
    FullImageLabel: {
        fontSize: 20,
        marginTop: 10,
        color: "black"
    }
});