import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import  LinearGradient from 'react-native-linear-gradient';


export default function Home(props) {



  return (
    
    <View style={styles.container}>
    <View style={styles.container1}>
     
      <Text style={styles.text}>ARE YOU</Text>
  </View>

  <View style={styles.button}>
           <TouchableOpacity style={styles.signIn} 
           onPress={()=>props.navigation.navigate('VerifierLogin')}
           >
               <LinearGradient
              colors={['#93c0f5','#41649c']} 
              style={styles.signIn} 
               >
                <Text style={ {
                        color:'#fff', fontFamily:'AlienWars-wMR6', fontSize:20, opacity:0.9,textAlign:"center" }}
                        >Verifier?</Text>
               </LinearGradient>
           </TouchableOpacity>
       </View>
  <View>
    <Text style={styles.text1}>Or</Text>
  </View>

  <View style={styles.button}>
           <TouchableOpacity style={styles.signIn} 
            onPress={()=>props.navigation.navigate('Login')}
           >
               <LinearGradient
              colors={['#93c0f5','#41649c']} 
              style={styles.signIn} 
               >
                <Text style={ {
                        color:'#fff', fontFamily:'AlienWars-wMR6', fontSize:20, opacity:0.9,textAlign:"center" }}>
                          User?</Text>
               </LinearGradient>
           </TouchableOpacity>
       </View>

</View>

  );
}

const styles = StyleSheet.create({
  container1: {
    
    padding:70,
    // backgroundColor: '#ddd',
    
  },
  text: {
    marginTop: 70,
    fontSize: 40,
    fontFamily:"Xenosphere-RM66",
    paddingBottom: 60,
    letterSpacing:2,
    color : '#41649c',
    
  },

  text1: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color:'#41649c',
    marginBottom: 20,
    fontFamily:"Xenosphere-RM66",
  },
  button: {
    alignItems: 'center',
    marginTop: 10
},
signIn: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
textSign: {
  fontFamily:"AlienWars-wMR6",
    fontSize: 18,
    fontWeight: 'bold',

}

});

