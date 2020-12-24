import React from 'react';
import { StyleSheet, Text, View, Button, Image,TextInput,TouchableOpacity} from 'react-native';
import  LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ForgotPassword(props){
return(
    <View style={styles.container}> 
    <View style={styles.header}>
    <Image
           source={require('../image/logo2.png')}
          style={{ width: 120, height: 120, position:"relative", marginLeft:100,marginTop:30}} 
          />
          {/* <View>
          <Text style={styles.welcomeText}>Update Your Passward </Text>
          </View> */}
        <Text style={styles.text}>
        Reset Your Password 
        </Text>
        </View>

        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
    <Text style={styles.text_footer}>New Password</Text>
        <View style={styles.action}>
            <FontAwesome
               name ='lock'
               color='#41649c'
               size={20}
               marginTop="10" />

<TextInput
    style={styles.textInput}     
      placeholder="New Password"
    />
    </View>
    
    <Text style={{color: '#05375a',fontSize: 18, marginTop:18}}>Confirm Password</Text>
        <View style={styles.action}>
          <FontAwesome
               name ='lock'
               color='#41649c'
               size={24}
               marginTop="10" />
<TextInput
    style={styles.textInput}     
      placeholder="Confirm Password"
/>

        </View>
       <View style={styles.button}>
           <TouchableOpacity style={styles.signIn} 
            onPress={()=>props.navigation.push('Login')}
           >
               <LinearGradient
              colors={['#93c0f5','#41649c']} 
              style={styles.signIn} 
               >
                <Text style={[styles.textSign, {
                        color:'#fff'

                    }]}>Save</Text>
               </LinearGradient>
           </TouchableOpacity>
       </View>
           

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
        marginLeft: 80,
        fontSize: 25,
        marginTop: 5,
        color:'#fff',
        fontFamily:'Roboto',
        fontWeight:'bold',
    },
text:{
    marginLeft: 20,
fontSize: 25,
marginTop: 20,
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
    borderRadius: 10
},
textSign: {
    fontSize: 18,
    fontWeight: 'bold'
}
   
  });