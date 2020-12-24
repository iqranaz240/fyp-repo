import React from 'react';
import {Linking, Text,TouchableOpacity,Alert,Image,View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default function Verifier(){
    ifScaned=e=>{
        Linking.openURL(e.data).catch(err=>
            Alert.alert("Invalid QRCode", e.data));
    }

    return(
        
    <QRCodeScanner
    
    topContent={
        <View>
        <Image
    source={require('../image/logo2.png')}
   style={{ width: 35, height: 35, position:"relative",marginTop:-50, marginLeft:-50}} 
   />

        <Text style={{fontSize:20, marginTop:-30, color:"#41649c",fontFamily:"monospace",letterSpacing:2, marginLeft:0}}>Digital Immunity</Text>
        </View>
    }

    containerStyle={{backgroundColor:"fff", marginBottom:"25%"}}
       onRead={ifScaned}
       reactivate={true}
       permissionDialogMessage="Need Permission to Access Camera"
       reactivateTimeout={10}
       showMarker={true}
       markerStyle={{borderColor:"#41649c",borderRadius:10}}
       bottomContent={
           <TouchableOpacity>
               <Text style={{fontSize:21,color:"#41649c", marginTop:100,fontFamily:"Xenosphere-WXgv"}}>Scan QR Code</Text>
           </TouchableOpacity>
       }

    />

    );
}