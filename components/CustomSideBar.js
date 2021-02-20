import React from 'react'
import {DrawerItems} from 'react-navigation-drawer'
import db from '../config'
import firebase from 'firebase'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default class Menu extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <DrawerItems {...this.props}/>
            </View>
        )
    }
}