import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default function Code(props){
return(
    <View> 
      <LinearGradient
colors={['#41649c', '#93c0f5']} 
style={{height:"20%"}}
/>
<Image
source={{uri:"https://image.shutterstock.com/image-photo/beautiful-arabian-woman-fashion-arabic-260nw-410283121.jpg"}} 
style={{width:100,height:100,borderRadius:50,marginTop:-50, marginLeft:130,opacity:0.95}}
/>
<Image 
source = {require('../image/logo2.png')}
style={{height:40,width:40,position:"relative", marginLeft:200,marginTop:-40}}
/>
<View >
<Text style={styles.text}>Mariya Khan</Text>
</View>
<Image
style={{height:300,width:350,marginTop:20,marginLeft:3}}
source={{uri:"https://pngimg.com/uploads/qr_code/qr_code_PNG26.png"}}
/>

<TouchableOpacity style={styles. return} 
 onPress={()=>props.navigation.push('Profile')}
           >
               <LinearGradient
              colors={['#93c0f5','#41649c']} 
              style={styles. return} 
               >
                <Text style={ {
                        color:'#fff', fontFamily:'TheBomb-7B9gw', fontSize:10, opacity:0.9,textAlign:"center" }}
                        >Go To Profile</Text>
               </LinearGradient>
           </TouchableOpacity>

    </View>
   
);
}



const styles = StyleSheet.create({
    text:{
        color:"black",
        marginLeft:110,
        marginTop:10,
        fontSize:25,
        fontFamily:'AlienWars-wMR6',
        
     },
     return: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop:20,
        marginLeft:10
    },
   
  });