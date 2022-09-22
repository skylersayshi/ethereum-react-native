import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [goal, setGoal] = useState('')
  const [list, setList] = useState([])

  
  const goalInputHandler = (enteredText) =>{
    setGoal(enteredText)
  }
  const addGoalHandler = () =>{
    setList((currentList) => [...currentList, goal])
    setGoal('')
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Your course goal!'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goal}
        />
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList alwaysBounceVertical={false}>
        {list.map((individual, idx) => (
          <View key={idx} style={styles.list}>
            <Text style={styles.listText}>{individual}</Text>
          </View>
        ))}
        </FlatList>
      </View>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: '5%',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 6,
  },
  list: {
    margin: 8,
    padding: 8,
    borderRadius: '5%',
    backgroundColor: '#5e0acc',
  },
  listText: {
    color: 'white',
  }
});
