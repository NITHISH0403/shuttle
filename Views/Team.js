import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TeamScreen from './TeamScreen/TeamScreen';
import ScoreScreen from './TeamScreen/ScoreScreen';
import MatchDetails from './TeamScreen/MatchDetails';

const TeamName = 'Teams';
const ScoreDetails = 'ScoreBoard';
const MatchInfo = 'MatchDetails';

const Tab = createBottomTabNavigator();

const Team = () => {
  return (
    <View style={styles.container}>
        <Tab.Navigator
          initialRouteName={TeamName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn == TeamName) {
                iconName = focused ? 'list' : 'list-outline';
              } else if (rn == ScoreDetails) {
                iconName = focused ? 'podium' : 'podium-outline';
              } else if (rn == MatchInfo) {
                iconName = focused ? 'receipt' : 'receipt-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#F31559',
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: { paddingBottom: 10, fontSize: 13 },
            tabBarStyle: {padding: 10, height: 70}
          })}
        >
          <Tab.Screen name={TeamName} component={TeamScreen} options={{ headerShown: false }}  />
          <Tab.Screen name={MatchInfo} component={MatchDetails} options={{ headerShown: false }}  />
          <Tab.Screen name={ScoreDetails} component={ScoreScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
});

export default Team;
