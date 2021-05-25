import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function FrontPage(props) {

  
  return (
    <TouchableOpacity 
    onPress={()=>props.navigation.navigate('Home')}
    style={styles.container}
    activeOpacity={.9}
    >
       
    <View>
    
      <Text style={styles.text}>DIGITAL IMMUNITY </Text>
      <View >
      <Text style={styles.text2}>PASSPORT</Text>
      </View>
      <View>
          <Image
           source={require('../image/logo2.png')}
          style={{ width: 330, height: 300, marginLeft:15}} 
          />
      </View>
      <View>
          <Text style={styles.slogan}>#SAVING LIVES DIGITALLY</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#41649c',
    padding:20,
    height: '100%',
  },
  text:{
      color: '#fafcff',
      fontSize:30,
      marginLeft: 30,
      marginTop: 70,
      fontFamily: 'monospace', 
      fontWeight: 'bold',
  },
  text2: {
    fontFamily:'sans-serif-thin', 
    fontSize:30,
    letterSpacing: 10,
    color: '#fafcff',
    marginLeft: 60,
    paddingBottom:100,
  },
  slogan: {
      marginTop: 70,
      marginLeft: 30,
    letterSpacing: 5,
    color: '#fafcff',
    paddingBottom:100,
  }

});