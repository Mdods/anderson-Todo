import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { FlatList, Text, View, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import {deleteTodo} from '../redux/actionCreators'

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state)
  const [list, setList] = useState(data)
  
 const handleDeleteTodo = (item) => {
   const todoIndex = list.todoListReducer.indexOf(item);
   console.log(todoIndex)
    if (todoIndex > -1) {
      dispatch(deleteTodo);
    } else {
      return
    }
  };
  
  // console.log('data', list)
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>To Do List</Text>
      </View>
      <View style={styles.titleContainer}>
        <View style={{borderWidth: 1, borderColor: 'red', height: 20, width: 20, padding: 10, margin: 2}}></View>
        <Text style={styles.title}>Urgent</Text>
      </View>
      <FlatList
        style={{ width: '100%', height: '100%', marginVertical: 20,}}
        data={list.todoListReducer}
        renderItem={({ item } ) => {
          return(
          <View style={styles.flatList}>
              {!item.urgent ? (
               <View style={styles.taskNonUrgent}>
                 <Text style={{fontSize: 22, color: 'white',}}>TASK {item.id}</Text>
               </View>
                ) : (
               <View style={styles.taskUrgent}>
                  <Text style={{fontSize: 22, color: 'white',}}>TASK {item0.id}</Text>
               </View>
              )}
            <View>
              <Text style= {styles.taskTitle}>{item.title}</Text>
             <View>
              <Text style={styles.taskTodo}>{item.body}</Text>
            </View>
              </View>
              <View style={styles.deleteButton}> 
                <TouchableOpacity onPress={() => { handleDeleteTodo(item) }}>
                  <Text style={{fontSize: 26, fontWeight: 'bold'}}>x</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        }}
      />
        <Button
          title="New Task"
          buttonStyle={{
            height: 60,
            backgroundColor: '#9FB6B1',
            borderRadius: 3,
          }}
          containerStyle={{
            width: '80%',
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          onPress={() => {navigation.navigate("NewTask")}}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  titleContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: '300'
  },
  list: {
    backgroundColor: 'blue'
  },
  flatList: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal:'5%',
    minHeight: '33%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
  },
  taskUrgent: {
    borderWidth: 2,
    height: 70,
    width: 100,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    borderColor: 'red',
  },
  taskNonUrgent: {
    borderWidth: 2,
    height: 70,
    width: 100,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10
  },
  taskTitle: {
    textDecorationLine: 'underline',
    fontSize: 20,
    fontWeight: 'bold'
  },
  taskTodo: {
    marginTop: 5,
    fontSize: 8,
    flexWrap: 'wrap',
    width: '20%'
  },
  deleteButton: {
    position: 'absolute',
    left: '92%',
    width: '20%',
  },
})

export default HomeScreen;