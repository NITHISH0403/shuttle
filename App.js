import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import IntroScreen from './Views/IntroScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Views/HomeScreen';
import Singles from './Views/Singles';
import MatchScreen from './Views/SinglesScreen/MatchScreen';
import Team from './Views/Team';
import MatchDetails from './Views/TeamScreen/MatchDetails';
import ScoreScreen from './Views/TeamScreen/ScoreScreen';
import TeamScreen from './Views/TeamScreen/TeamScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  setTimeout(()=>{
    setIsLoaded(true);
  },2000);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
            {isLoaded ? <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} /> : <Stack.Screen name='IntroScreen' component={IntroScreen} options={{ headerShown: false }} /> }
            <Stack.Screen name='MatchScreen' component={MatchScreen} options={{ headerShown: true }} />
            <Stack.Screen name='Singles' component={Singles} options={{ headerShown: true }} />
            <Stack.Screen name='Team' component={Team} options={{ headerShown: true }} />
          
            <Stack.Screen name='MatchDetails' component={MatchDetails} options={{ headerShown: true }} />
            <Stack.Screen name='ScoreScreen' component={ScoreScreen} options={{ headerShown: true }} />
            <Stack.Screen name='TeamScreen' component={TeamScreen} options={{ headerShown: true }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // height: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
});
