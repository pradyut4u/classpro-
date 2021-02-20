import React from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import db from '../config'
import firebase from 'firebase'
import Header from '../components/Header'

export default class Sell extends React.Component{
    constructor(){
        super()
        this.state={
            proName:'',
            proDiscription:'',
            proPrice:'',
            proCondition:''
        }
    }

    insertPro = async ()=>{
        await db.collection('products').add({
            name:this.state.proName,
            discription:this.state.proDiscription,
            condition:this.state.proCondition,
            price:this.state.proPrice
        })
        this.setState({
            proName:'',
            proDiscription:'',
            proPrice:'',
            proCondition:''
        })
        alert("You can happily wait for the buyer.")
    }

    render(){
        return(
            <View style={{flex:1, backgroundColor:"#aaaaaa"}}>
                <Header navigation={this.props.navigation} title={'Market'}/>
                <View style={style.container}>
                <TextInput style={style.textInput} placeholder={"Name"} placeholderTextColor={"red"} onChangeText={text=>{this.setState({proName:text})}} value={this.state.proName}/>
                <TextInput style={style.textInput} placeholder={"Discription"} placeholderTextColor={"red"} onChangeText={text=>{this.setState({proDiscription:text})}} value={this.state.proDiscription}/>
                <TextInput style={style.textInput} placeholder={"Price"} placeholderTextColor={"red"} onChangeText={text=>{this.setState({proPrice:text})}} value={this.state.proPrice}/>
                <TextInput style={style.textInput} placeholder={"Condition"} placeholderTextColor={"red"} onChangeText={text=>{this.setState({proCondition:text})}} value={this.state.proCondition}/>
                <TouchableOpacity style={style.button} onPress={()=>{
                    this.insertPro()
                }}>
                    <Text>Sell</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#aaaaaa",
        alignItems: "center",
        justifyContent: "center"
    },

    textInput:{
        borderWidth:3,
        marginBottom:20,
        borderColor:"cyan",
        width:"50%",
        height:"5%",
        borderRadius:50,
        shadowColor:"blue",
        shadowOffset:{
            width:0,
            height:5
        },
        shadowOpacity:0.6,
        shadowRadius:3,
        textAlign:'center'
    },

    button: {
        marginBottom: 50,
        width: 300,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#ff9800",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8
        }
        }
})