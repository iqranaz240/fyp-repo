import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FrontPage from './src/screens/FrontPage'
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import Code from './src/screens/QRCode';
import Home from './src/screens/Home';
import ForgotPassword from './src/screens/ForgotPassword';
import Verifier from './src/screens/Verifier';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
           <Stack.Navigator>
        {/* <Stack.Screen name="FrontPage" component={FrontPage} 
        options={{headerShown: false}}
        /> */}
        <Stack.Screen name="FrontPage" component={FrontPage}
         options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={Home}
        options={{
          title: 'Digital Immunity',
          headerStyle: {
            backgroundColor: '#41649c', 
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            letterSpacing:2,
            fontFamily:'monospace',
            fontSize: 15, 
          },
        }}
        />
         <Stack.Screen name="Verifier" component={Verifier} 
        options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={Login} 
        options={{headerShown: false}}
        />
         <Stack.Screen name="ForgotPassword" component={ForgotPassword} 
        options={{headerShown: false}}
        />
        <Stack.Screen name="Profile" component={Profile}
        options={{
          title: 'Patient Profile',
          // headerTitle: props =>(
          //   <Image
          //   style={{height:30, width:30, marginLeft:-10}}
          //   source={require('./assets/logo.png')}/>),
            
          
          headerTintColor: '#41649c',
          headerTitleStyle: {
            letterSpacing:2,
            fontFamily:'monospace',
            fontSize: 15, 
          },
        }}
        />
       
        <Stack.Screen name="Code" component={Code}
         options={{
          title: 'Scan Code',
         headerTintColor: '#41649c',
         headerTitleStyle: {
           letterSpacing:2,
           fontFamily:'monospace',
           fontSize: 15, 
         },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}