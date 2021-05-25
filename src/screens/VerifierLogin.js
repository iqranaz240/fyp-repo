import React, {useState} from "react";
import axios from 'axios';
import { StyleSheet, Text, View, Image,TextInput,TouchableOpacity,Alert, animation, KeyboardAvoidingView} from 'react-native';
import  LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

export default function VerifierLogin(props){
    // const [verifier_id, setVerifier_id] = useState("");
    // const [password, setPassword] = useState("");
    // const [errortext, setErrortext] = useState('');

    // const [loginStatus, setLoginStatus] = useState("");
   

    // const LoginVerifier = ()=>{
    //   if(!verifier_id || !password){
    //     alert("Provide id/password");
    //   }
    //   else{
    //   axios.post("http://127.0.0.1:3001/verifier/login",{
    //     verifier_id : verifier_id,
    //     password : password,
    //   }).then((response)=>{
    //    if(response.data.message){
    //    alert("Please Provide correct id/password")
    //      setLoginStatus(response.data.message);
    //      }else{
    //      setLoginStatus(response.data[0].verifier_id);
    //      props.navigation.navigate('Profile')
    //    }
      
    //   });
    // }

    // };
    

return(
   
    <View style={styles.container}> 
    <View style={styles.header}>
    <Image
           source={require('../image/logo2.png')}
          style={{ width: 120, height: 120, position:"relative", marginLeft:120,marginTop:30}} 
          />
          <View>
          <Text style={styles.welcomeText}>WELCOME TO </Text>
          </View>
        <Text style={styles.text}>
             Digital Immunity Passport
        </Text>
        </View>
        
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
             <KeyboardAvoidingView>
    <Text style={styles.text_footer}>Verifier ID</Text>
        <View style={styles.action}>
            <FontAwesome
               name ='user-o'
               color='#41649c'
               size={20}
               marginTop="10" />

<TextInput
// onChange={(e)=>{setVerifier_id(e.target.value)}}
// onChangeText = {this.handleVerifier}
onChangeText={(text)=>setVerifier_id(text)}
// onChangeText={(verifier_id) =>
//     setVerifier_id(verifier_id)
//   }
    style={styles.textInput}    
    value={verifier_id} 
      placeholder="Your Verifier ID"
      
      
    />
    </View>
    
    <Text style={{color: '#05375a',fontSize: 18, marginTop:18}}   >Password</Text>
        <View style={styles.action}>
          <FontAwesome
               name ='lock'
               color='#41649c'
               size={24}
               marginTop="10" />
<TextInput
// onChange={(e)=>{setPassword(e.target.value)}}
// onChangeText = {this.handlePassword}
onChangeText={(text)=>setPassword(text)}
value={password}
    style={styles.textInput}  
      
      placeholder="Your Password"
      secureTextEntry={true}
/>

        </View>
     
        <TouchableOpacity 
         onPress={()=>props.navigation.navigate('ForgotPassword')}>
                <Text style={{color: '#41649c', marginTop:15}} >Forgot password?</Text>
    </TouchableOpacity>
       
    <View style={styles.button}>
           <TouchableOpacity style={styles.signIn} 
            // onPress={() => LoginVerifier(props)}
            onPress={()=>props.navigation.navigate('Verifier')}
            >
       
           
               <LinearGradient
              colors={['#93c0f5','#41649c']} 
              style={styles.signIn} 
               >
                <Text style={[styles.textSign, {
                        color:'#fff'

                    }]}>Login</Text>
               </LinearGradient>
           </TouchableOpacity>
       </View>
          <View style={{position:"absolute", marginTop:400, marginLeft:30}}>
       <FontAwesome name="angle-left" size={30} color="#41649c"  
        onPress={()=>props.navigation.push('Home')}
       />
       </View> 
       </KeyboardAvoidingView>
</Animatable.View>

</View>

);
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#41649c',
       
    },
    welcomeText:{
        marginLeft: 100,
        fontSize: 25,
        marginTop: 5,
        color:'#fff',
        fontFamily:'Roboto',
        fontWeight:'bold',
    },
text:{
    marginLeft: 30,
fontSize: 23,
marginTop: 5,
color:'#fff',
fontFamily:'sans-serif-thin',
letterSpacing:1
},

textBox: {
    padding:60,
    marginTop: 50,
   
},  
header: {
    flex: 1,
    // justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
},
footer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
},
text_footer: {
    color: '#05375a',
    fontSize: 18,
},

textInput:{
    height: 40, 
     width:250,
     marginBottom : 30, 
    position:"absolute", 
    marginTop:-10, 
    marginLeft:20, 

},
action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#41649c',
    paddingBottom: 5
},
button: {
    alignItems: 'center',
    marginTop: 50
},
signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontFamily:"Xenosphere-RM66",
},
textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:"Xenosphere-RM66",
},
errorTextStyle: {
  color: 'red',
  textAlign: 'center',
  fontSize: 14,
}
   
  });