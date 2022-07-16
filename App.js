import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';


function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
        <Button title="home" onPress={() => navigation.navigate("home")} />
        <Button title="contact" onPress={() => navigation.navigate("contact")} />
    </View>
  );
}

function ContactScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contact Screen</Text>
        <Button title="about" onPress={() => navigation.navigate("about")} />
        <Button title="home" onPress={() => navigation.navigate("home")} />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
        <Button title="about" onPress={() => navigation.navigate("about")} />
        <Button title="contact" onPress={() => navigation.navigate("contact")} />
    </View>
  );
}

const Stack = createNativeStackNavigator()
// const Drawer = createDrawerNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="about" component={AboutScreen} />
                <Stack.Screen name="contact" component={ContactScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
