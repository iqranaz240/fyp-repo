import React, {Component} from "react";
// import axios from 'axios';
import { StyleSheet, Text, View, Image,TextInput,TouchableOpacity} from 'react-native';
import  LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from "@react-native-community/async-storage";


export default class Login extends Component{
     
// export default function Login(props){
    // const [patient_id, setPatient_id] = useState("");
    // const [password, setPassword] = useState("");
 
    // const [loginStatus, setLoginStatus] = useState("");

    constructor(props){
        super(props);
        this.state={
           patient_id : '',
           password : ''
        }
    }
    
       

      login = ()=>{
    
        fetch("http://10.0.2.2:3001/patientRegistration/login",{
            method: 'POST',
            headers:{
                // 'Accept': 'application/json',
                'Content-Type' : 'application/json',

            },
            body: JSON.stringify({
                patient_id: this.state.patient_id,
                password: this.state.password,
            })
        }).then((response)=>response.json())
        .then((res)=>{
            if(res.success === true){
                var patient_id = res.message;
            
            AsyncStorage.setItem('patient_id', patient_id);
            AsyncStorage.getItem('patient_id');
            this.props.navigation.navigate(`Profile`,{patient_id});
            console.log(this.getValueFunction(patient_id))
           
        }
        else{
            alert(res.message);
        }
    }).done();
}
    //          patient = (patient_id) =>{
    // this.props(`http://10.0.2.2:3001/patientRegistration/${patient_id}`)
    //         }
      
getValueFunction = async () => {
    try {
     let user = await AsyncStorage.getItem('patient_id');
      alert(user)
    }
    catch{
        alert(error)
    }
   };
  

 
   

render(){
    
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
    <Text style={styles.text_footer}>Patient ID</Text>
        <View style={styles.action}>
            <FontAwesome
               name ='user-o'
               color='#41649c'
               size={20}
               marginTop="10" />

<TextInput
onChangeText={(patient_id)=>this.setState({patient_id})}
value={this.state.patient_id}
    style={styles.textInput}     
      placeholder="Your Patient ID"
      
      
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
// onChange={(password)=>setPassword(password)}
// value={password}
onChangeText={(password)=>this.setState({password})}
value={this.state.password}
    style={styles.textInput}     
      placeholder="Your Password"
      secureTextEntry={true}
/>

        </View>
        <TouchableOpacity 
         onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                <Text style={{color: '#41649c', marginTop:15}} >Forgot password?</Text>
    </TouchableOpacity>
       <View style={styles.button}>
           <TouchableOpacity style={styles.signIn} 
            onPress={this.login}
            
            // onPress={()=>this.props.navigation.navigate('Profile')}
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
        onPress={() => this.props.navigation.push('Home')}
       />
       </View> 
</Animatable.View>
</View>
   
);
                }
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
}
   
  });