import React from 'react'
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'
import Header from '../components/Header'

export default class Home extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Header navigation={this.props.navigation} title="Home"/>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Sell')}}>
                    <Text>Sell</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.button}>
                    <Text>Rent</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.button}>
                    <Text>Buy</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#aaaaaa",
      alignItems: "center",
      justifyContent: "center"
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