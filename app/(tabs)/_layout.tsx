import { Colors } from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const theme = useColorScheme()??"dark";

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors[theme].tint, headerShown: false}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Events',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="table" color={color} />,
        }}
      /> 
    </Tabs>
  );
}