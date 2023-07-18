import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const MatchScreen = ({ navigation, route }) => {

    const {player1Name, player2Name, points} = route.params;
  
    const [player1Point, setPlayer1] = useState(0);
    const [player2Point, setPlayer2] = useState(0);
    const [winpoints, setWinPoints] = useState(points);
    const [count, setCount] = useState(0);

    if(player1Point == winpoints-1 && player2Point == winpoints-1){
      setWinPoints(+winpoints+1);
      setCount(count+1);
    }

  const player1Increment = () => {
    if (player1Point === Number(winpoints - 1)) {
      setPlayer1(player1Point + 1);
      alert(`${player1Name} is the winner!`);
      navigation.navigate('Home');
    } else {
      setPlayer1(player1Point + 1);
    }
  };

  const player1Decrement = () => {
    if (player1Point !== 0) {
      setPlayer1(player1Point - 1);
      if(count>0 && (player1Point==winpoints-2 || player2Point==winpoints-2)){
        setWinPoints(+winpoints-1);
        setCount(+count-1);
      }
    }
  };

  const player2Increment = () => {
    if (player2Point === Number(winpoints - 1)) {
      setPlayer2(player2Point + 1);
      alert(`${player2Name} is the winner!`);
      navigation.navigate('Home');
    } else {
      setPlayer2(player2Point + 1);
    }
  };

  const player2Decrement = () => {
    if (player2Point !== 0) {
      setPlayer2(player2Point - 1);
      if(count>0 && (player1Point==winpoints-2 || player2Point==winpoints-2)){
        setWinPoints(+winpoints-1);
        setCount(+count-1);
      }
    }
  };

  return (
    <View style={styles.inner}>
      <View style={styles.header}>
        <Text style={styles.header_Text1}>MATCH ON</Text>
        <Text style={styles.header_Text2}>MATCH POINT: {winpoints}</Text>
      </View>
      <View style={styles.box}>
        <View style={styles.player1Ground}>
          <Text style={styles.playerName}>{player1Name}</Text>
          <Text style={styles.playerPoint}>{player1Point}</Text>
          <View style={styles.buttonbox}>
            <TouchableOpacity onPress={player1Increment} style={styles.plusButton}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={player1Decrement} style={styles.minusButton}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.player2Ground}>
          <Text style={styles.playerName}>{player2Name}</Text>
          <Text style={styles.playerPoint}>{player2Point}</Text>
          <View style={styles.buttonbox}>
            <TouchableOpacity onPress={player2Increment} style={styles.plusButton}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={player2Decrement} style={styles.minusButton}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20%',
  },
  header_Text1: {
    color: 'white',
    fontSize: 20,
    marginBottom: '20%',
  },
  header_Text2: {
    color: 'white',
    fontSize: 20,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    height: '40%',
    width: '80%',
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: '40%',
  },
  player1Ground: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 3,
    borderColor: 'white',
    width: '50%',
    height: '100%',
  },
  player2Ground: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    width: '50%',
    height: '100%',
  },
  playerName: {
    color: 'white',
    fontSize: 20,
  },
  playerPoint: {
    marginTop: 30,
    color: 'white',
    fontSize: 70,
  },
  buttonbox: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  plusButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    width: 35,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  minusButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    width: 35,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default MatchScreen;
