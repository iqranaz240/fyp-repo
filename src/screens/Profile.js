  
import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,ScrollView,Modal,FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import {Card} from 'react-native-paper';
import {useParams} from 'react'
import  LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class Profile extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: [],
        isLoading: true,
        modal:false,
        perModal:false,
      
    
      };
    }
    // flatlistRef= useRef();
    
    componentDidMount(patient_id) {
       
      fetch(`http://10.0.2.2:3001/patientRegistration${patient_id}`)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({ isLoading: false,
          data: responseJson });
         
        })
        .catch((error) => console.error(error))
      
    }
  

    
    render() {
      
     
       
      const { data, isLoading, modal,perModal } = this.state; 
    
    // const [modal,setModal] = useState(false);
   
    return(
       
<View style={styles.container}>
{/* 
                 <FlatList
                  data={data}
                  keyExtractor={({id }, index) => id}
                  renderItem={({ item }) => (
                    <Text>{item.patient_id}, {item.vc_id}, {item.f_name}</Text>
                   
                  )}
                /> */}
            

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
{isLoading ? <ActivityIndicator size="large"/> : (

<FlatList
data={data}
keyExtractor={({id }, index) => id}
renderItem={({ item }) => (

<Text style={styles.text}>{item.f_name+ " " + item.l_name} </Text>

)}
/>

)}
{/* <Text>Duaa</Text> */}

</View>




<Modal
 animationType="slide"
 transparent={true}
 visible={modal}
 onRequestClose={()=>{
     this.setState({modal: false})
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

    onPress={()=>{this.props.navigation.navigate('Code');  this.setState({modal: false})}}
    style={{fontSize:11,color:"#41649c",fontWeight:"bold", marginLeft:7,marginTop:3}}>Click to show</Text>

</View>
        
        <FontAwesome name="times-circle" color='black'
               size={20} style={{position:"absolute", marginLeft:330}}
               onPress={() =>  this.setState({modal: false})}
  
  />
<ScrollView>

<View style={styles.action}>
<Text style={styles.profileText}>Vaccine Name:</Text>
 <Card style={{ width:"55%",height:40, marginLeft:50, marginBottom:2,opacity:0.2}}></Card>
   
</View>

<View style={styles.action}>
    <Text style={styles.profileText}>Vaccine Production:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:10, marginBottom:2,opacity:0.2}}></Card>
</View>
<View style={styles.action}>
    <Text style={styles.profileText}>Vaccine Expiry:</Text>
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
    <Text style={styles.profileText}>Vaccined at:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:50, marginBottom:2,opacity:0.2}}></Card>
</View>
<View style={styles.action}>
    <Text style={styles.profileText}>Vaccine Result:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:36, marginBottom:2,opacity:0.2}}></Card>
</View>

</ScrollView>
              </View>

</Modal>
<Text style={styles.report} > Test Reports</Text>
<SafeAreaView style={{ flex: 1 }}>
{/* <ScrollView > */}



<View>
{isLoading ? <ActivityIndicator size="large"/> : (
<FlatList
data={data}
keyExtractor={({id }, index) => id}
renderItem={({ item }) => (
<Text  style={styles.card}
onPress={()=> this.setState({modal: true})}
>{item.patient_id}</Text>
)}
/>

)}
</View>
{/* </ScrollView> */}
</SafeAreaView>

<Modal
 animationType="slide"
 transparent={true}
 visible={perModal}
 onRequestClose={()=>{
     this.setState({perModal: false})
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

    onPress={()=>{this.props.navigation.navigate('Code');  this.setState({perModal: false})}}
    style={{fontSize:11,color:"#41649c",fontWeight:"bold", marginLeft:7,marginTop:3}}>Click to show</Text>

</View>
        
        <FontAwesome name="times-circle" color='black'
               size={20} style={{position:"absolute", marginLeft:330}}
               onPress={() =>  this.setState({perModal: false})}
  
  />
<ScrollView>

<View style={styles.action}>
    
{isLoading ? <ActivityIndicator size="large"/> : (
<FlatList
data={data}
keyExtractor={({id }, index) => id}
renderItem={({ item }) => (
<Text style={styles.profileText}>Patient Name: 
{/* <Card style={{width:"100%",height:40,marginTop:30, marginLeft:50, marginBottom:2,opacity:0.2}}>
    <Text >{item.f_name + " " + item.l_name}</Text>
    </Card> */}

 <Text style={styles.modalCard} style={{width:"55%",height:40,marginTop:10, marginLeft:100, marginBottom:2,opacity:0.2}}>{item.f_name + " " + item.l_name}</Text>
 
 </Text>
)}/>
)}
</View>

<View style={styles.action}>
    <Text style={styles.profileText}>Father's Name: </Text>
    <Card style={{ width:"55%",height:40, marginLeft:40, marginBottom:2,opacity:0.2}}></Card>
</View>

<View style={styles.action}>
    <Text style={styles.profileText}>Email:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:105, marginBottom:2,opacity:0.2}}></Card>
</View>
<View style={styles.action}>
    <Text style={styles.profileText}>Password:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:80, marginBottom:2,opacity:0.2}}></Card>
</View>
<View style={styles.action}>
    <Text style={styles.profileText}>Phone#:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:100, marginBottom:2,opacity:0.2}}></Card>
</View>
<View style={styles.action}>
    <Text style={styles.profileText}>Qualification:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:40, marginBottom:2,opacity:0.2}}></Card>
</View>
<View style={styles.action}>
    <Text style={styles.profileText}>DOB:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:125, marginBottom:2,opacity:0.2}}></Card>
</View>
<View style={styles.action}>
    <Text style={styles.profileText}>Gender:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:100, marginBottom:2,opacity:0.2}}></Card>
</View>
<View style={styles.action}>
    <Text style={styles.profileText}>Martial Status:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:40, marginBottom:2,opacity:0.2}}></Card>
</View>
<View style={styles.action}>
    <Text style={styles.profileText}>Cnic:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:120, marginBottom:2,opacity:0.2}}></Card>
</View>
<View style={styles.action}>
    <Text style={styles.profileText}>Religion:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:85, marginBottom:2,opacity:0.2}}></Card>
</View>
<View style={styles.action}>
    <Text style={styles.profileText}>Address:</Text>
    <Card style={{ width:"55%",height:40, marginLeft:90, marginBottom:2,opacity:0.2}}></Card>
</View>

</ScrollView>
              </View>

</Modal>

<View>
    <Text style={styles.details}>My Details</Text>

    <Card style={styles.myCard}
    onPress={()=> this.setState({perModal: true})}
    >
<Card.Title title="Personal Details" subtitle="View Details" />
</Card>

<Card style={[styles.myCard,{marginBottom:10}]}>
<Card.Title title="Documents" subtitle="View Documents" />
</Card>
</View>

</View>


    );

      }
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
    marginLeft:10,
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


},
card:{
    marginTop: 20,
    width:"100%",
    shadowOpacity:0.1,
    shadowColor: "#41649c",
    borderWidth: 0.2,
    color: "black",
    fontWeight: 'bold',
    fontSize:20,
    paddingLeft:10,
    paddingTop:20,
    paddingBottom:20,
    fontFamily:"monospace",
    backgroundColor:"white"

   
},

});