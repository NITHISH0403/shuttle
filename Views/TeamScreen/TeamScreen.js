import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const TeamScreen = ({navigation}) => {
  const [TeamName, setTeamName] = useState('');
  const [Team, setTeam] = useState([]);

  const handleAddText = (text) => {
    setTeamName(text);
  }

  const handleAddTeam =() =>{
    setTeam((prevTeam) => [...prevTeam, TeamName]);
    setTeamName('');
  }

  const handleRemoveTeam = (value) =>{
    const TeamItems = Team.find((items)=> items.index === value.index);
    if(TeamItems){
      setTeam(Team.filter((item) => item !== value));
      console.log(Team);
    }
  }
  return (
    <View style={styles.inner}>
      <View style={styles.team}>
        <TextInput placeholder='Enter the Team Name' placeholderTextColor="gray" value={TeamName} onChangeText={(text)=> {handleAddText(text)}} style={styles.inputValue}/>
        <TouchableOpacity style={styles.btn} onPress={handleAddTeam}>
          <Text style={styles.btn_Text}>+ ADD</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.team_Name}>
        <Text style={styles.tableDetails}>Team Name</Text>
        {Team.map((text,index) => (
          <View style={styles.teamDetails} key={index}>
            <Text style={styles.teamDetails_Text}>{text}</Text>
            <TouchableOpacity style={styles.teamDetails_Btn} onPress={()=>handleRemoveTeam(text)}>
              <Text style={styles.teamDetails_Btn_Text}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
    inner:{
        flex: 1,
        width: '100%',
        backgroundColor: 'black',
    },
    team:{
      display: 'flex',
      backgroundColor: 'black',
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
      justifyContent: 'center',
      top: 10,
    },
    inputValue:{
      display: 'flex',
      borderWidth: 1,
      borderRadius: 10,
      width: '70%',
      backgroundColor:'white',
    },
    btn:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      width: '20%',
      backgroundColor: '#F31559',

    },
    btn_Text:{
      fontSize: 15,
      fontWeight: 'bold', 
      color: 'white',
    },
    team_Name:{
      display: 'flex',
      top: 30,
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
    },
    tableDetails:{
      display: 'flex',
      textAlign: 'center',
      borderBottomWidth: 1,
      marginTop: 20,
      width: '100%',
      height: 50,
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
    },
    teamDetails:{
      display: 'flex',
      flexDirection: 'row',
      borderWidth: 1,
      width: '100%',
      height: 60,
      color: 'black',
      fontSize: 15,
      fontWeight: 'bold',
    },
    teamDetails_Text:{
      color: 'black',
      margin: 15,
      fontSize: 20,
      fontWeight: 'bold',
    },
    teamDetails_Btn:{
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      width: 50,
      marginLeft: '55%',
      height: 40,
      marginTop: 10,
      marginLeft: '72%',
      backgroundColor: 'red',
    },
    teamDetails_Btn_Text:{
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
    }
})

export default TeamScreen