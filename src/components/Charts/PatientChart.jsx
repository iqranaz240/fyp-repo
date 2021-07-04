import React, { Component } from 'react'  
import axios from 'axios';  
import { Line } from 'react-chartjs-2';  
export default class VaccineChart extends Component {  
        constructor(props) {  
                super(props);  
                this.state = { Data: {} };  

        }  
        componentDidMount() {  
                axios.get(`http://localhost:3001/patientRegistration`)  
                        .then(res => {  
                                console.log(res);  
                                const ipl = res.data;  
                                let patient_id = [];  
                                let vc_id = []; 
                                
                                ipl.forEach(record => {  
                                        patient_id.push(record.patient_id);  
                                        vc_id.push(record.vc_id); 
                                       
                                });  
                               this.setState({  
                                        Data: {  
                                                // labels: ['1', '2', '3', '4', '5', '6'], 
                                                labels: patient_id,
                                                datasets: [  
                                                        {  
                                                                label: 'Patient Per Day',  
                                                                data:   [1, 10, 15, 20, 25, 30],
                                                                backgroundColor: [ 

                                                                        // "Blue",
                                                                        "Pink",   
                                                                        // "Red",
                                                                        // "Orange",
                                                                        // "#3cb371",  
                                                                        // "#0000FF",  
                                                                        // "#9966FF",  
                                                                        // "#4C4CFF",  
                                                                        // "#00FFFF",  
                                                                        // "#f990a7",  
                                                                        // "#aad2ed",  
                                                                        // "#FF00FF",  
                                                                       

                                                                ]  
                                                        }  
                                                ]  
                                        }  
                                });  
                        })  
        }  
        render() {  
                return (  
                        <div style={{ position: "relative", marginLeft:60, height:"40vh", width: "30vw"}}>  
                                <Line  
                                        data={this.state.Data}
                                      
                                        options={{ maintainAspectRatio: false,
                                            title:{
                                            display: true,
                                            text: "Patient Per Day",
                                            fontSize : 20
                                        }
                                        
                                        }} />  
                        </div>  

                )  

        }  
    }
