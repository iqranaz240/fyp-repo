  
import React,{useState} from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, ScrollView,Modal, Button } from 'react-native';
import {Card} from 'react-native-paper';
import  LinearGradient from 'react-native-linear-gradient';
// import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Profile(props) {
    
    const [modal,setModal] = useState(false);
  
    
    return(
<View style={styles.container}>
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

<ScrollView>
<View>
    

<Modal
 animationType="slide"
 transparent={true}
 visible={modal}
 onRequestClose={()=>{
     setModal(false)
 }}
>

<View style={styles.modalView}>
<LinearGradient
colors={['#41649c', '#93c0f5']} 
style={{height:"27%" ,   borderTopLeftRadius: 30,
borderTopRightRadius: 30,}}
/>
<Image
source={{uri:"https://image.shutterstock.com/image-photo/beautiful-arabian-woman-fashion-arabic-260nw-410283121.jpg"}} 
style={{width:100,height:100,borderRadius:50,marginTop:-150, marginLeft:25,opacity:0.95}}
/>
<Image 
source = {require('../image/logo2.png')}
style={{height:40,width:40,position:"relative", marginLeft:90,marginTop:-39}}
/>
<View >
<Text style={[styles.text,{marginLeft:10}]}>Mariya Khan</Text>
</View>
<View style={styles.codeBox}>
    <Image  
    source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/QR_icon.svg/1024px-QR_icon.svg.png"}}
   style={{height:50,width:50, marginLeft:15,marginTop:5}}
  
   />
   
   <Text 

    onPress={()=>{props.navigation.navigate('Code'); setModal(false)}}
    style={{fontSize:11,color:"#41649c",fontWeight:"bold", marginLeft:7,marginTop:3}}>Click to show</Text>

</View>
        
        <FontAwesome name="times-circle" color='black'
               size={20} style={{position:"absolute", marginLeft:330}}
               onPress={() => setModal(false)}
               />
<ScrollView>
<View style={styles.action}>
    <Text style={styles.profileText}>Test Name:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:50, marginBottom:2,opacity:0.2}}></Card>
</View>
<View style={styles.action}>
    <Text style={styles.profileText}>Test Type:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:50, marginBottom:2,opacity:0.2}}></Card>
</View>
<View style={styles.action}>
    <Text style={styles.profileText}>Test Sample No:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:10, marginBottom:2,opacity:0.2}}></Card>
</View>
<View style={styles.action}>
    <Text style={styles.profileText}>Date:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:90, marginBottom:2,opacity:0.2}}></Card>
</View>
<View style={styles.action}>
    <Text style={styles.profileText}>Age:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:100, marginBottom:2,opacity:0.2}}></Card>
</View>
<View style={styles.action}>
    <Text style={styles.profileText}>Gender:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:74, marginBottom:2,opacity:0.2}}></Card>
</View>
<View style={styles.action}>
    <Text style={styles.profileText}>Approval Type:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:15, marginBottom:2,opacity:0.2}}></Card>
</View>
<View style={styles.action}>
    <Text style={styles.profileText}>Tested at:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:50, marginBottom:2,opacity:0.2}}></Card>
</View>
<View style={styles.action}>
    <Text style={styles.profileText}>Test Result:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:36, marginBottom:2,opacity:0.2}}></Card>
</View>
         
</ScrollView>
              </View>

</Modal>

<Text style={styles.report}
    > Test Reports</Text>

<Card style={styles.myCard} 
onPress={()=>setModal(true)}>
<Card.Title title="Covid-19" subtitle="View Results" />
</Card>

<Card style={styles.myCard}
onPress={()=>setModal(true)}>
<Card.Title title="Malaria" subtitle="View Results" />
</Card>

<Card style={styles.myCard}
onPress={()=>setModal(true)}>
<Card.Title title="Dengue" subtitle="View Results" />
</Card>
</View>


<View>
    <Text style={styles.details}>My Details</Text>

    <Card style={styles.myCard}>
<Card.Title title="Personal Details" subtitle="View Details" />
</Card>

<Card style={[styles.myCard,{marginBottom:10}]}>
<Card.Title title="Documents" subtitle="View Documents" />
</Card>

</View>

</ScrollView>
</View>
    );
}

const styles = StyleSheet.create({
container:{
    flex: 1,
},

text:{
   color:"black",
   marginLeft:110,
   marginTop:10,
   fontSize:25,
   fontFamily:'AlienWars-wMR6',
   
},
report:{
    marginTop:30,
    fontWeight:"bold",
    fontSize:15,
    fontFamily:'monospace',
    paddingBottom:5, 
    color:"#41649c", 
    letterSpacing:3,
    fontWeight:"bold",
    
},
details:{
    marginTop:17,
    fontWeight:"bold",
    fontSize:15,
    fontFamily:'monospace',
    marginLeft:6,
    color:"#41649c", 
    letterSpacing:3,
    paddingBottom:5, 
},
myCard:{
    marginTop:10,
    borderWidth:0.5,
    borderColor:"#41649c",
},

modalView:{
    position:"absolute",
    bottom:2,
    width:"100%",
    height:"85%",
    backgroundColor:"white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

},
modalButtonView:{
    flexDirection:"row",
    justifyContent:"space-around",
    padding:10
},
codeBox:{
    width:80,
    height:80,
    borderRadius:15,
    backgroundColor:"#ddd",
    position:"absolute",
    marginLeft:250,
    marginTop:35,
    borderWidth:1,
    borderColor:"gray",
},
action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 5
},
profileText:{
    marginLeft:15,
    marginTop:17,
    fontFamily:"monospace",
    color:"#41649c",

}
});