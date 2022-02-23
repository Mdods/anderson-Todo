import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Text, TextInput, View, StyleSheet, Alert} from 'react-native'
import { Button, CheckBox, } from 'react-native-elements';
import { AddTodo } from '../redux/actionCreators'

const NewTaskTodo = ({ navigation }) => {
  const stateCheck = useSelector(state => state)
  const dispatch = useDispatch()
  const [isChecked, setIsChecked] = useState(false);
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

   const addTodo = () => {
     if (title && body) {
       const newId = stateCheck.todos.todos.length +1
       dispatch(AddTodo(newId, title, body, isChecked));
       setBody('');
       setTitle('')
      return navigation.navigate('Home')
    } else {
      Alert.alert('please add a title and body');
    }
  };
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignContent: 'center'}}>
      <View styles={styles.titleContainer}>
        <Text style={styles.title}>Add a Task</Text>
      </View>
      <View style={styles.titleInput}>
        <Text style={styles.title}>Title</Text>
        <TextInput
          style={styles.mainInput}
          onChangeText={setTitle}
          placeholder={'Add your todo title'}
          value={title}
      />
      </View>
      <View stlye={styles.titleContainer}>
        <Text style={styles.title}>Body</Text>
       <TextInput
          style={styles.mainInput}
          onChangeText={setBody}
          placeholder={'Add your todo here'}
          value={body} 
          
        />
      </View>
      <View>
          <CheckBox
          title="Urgent"
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
      />
        </View>
        </View>
      <View>
         <Button
          title="New Task"
          buttonStyle={{
             marginTop: 70,
             height: 90,
             backgroundColor: '#9FB6B1',
             borderRadius: 3,
           }}
           containerStyle={{
             width: '80%',
             marginHorizontal: 50,
             marginVertical: 10,
           }}
           onPress={() => {addTodo()}}
        />
      </View>
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center'
  },
   mainInput: {
    borderWidth: 1,
    height: 55,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    borderRadius: 9,
  },
   titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    marginVertical: 20,
    marginHorizontal: '5%',
    fontSize: 22,
    fontWeight: '300'
  },
})

export default NewTaskTodo;