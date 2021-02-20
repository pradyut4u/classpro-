import React from 'react'
import {Header, Icon, Badge} from 'react-native-elements'
import {View, Text, StyleSheet} from 'react-native'
import db from '../config'
import firebase from 'firebase'

export default class AppHeader extends React.Component{
    constructor(props){
       super(props)
       this.state={
           userId: firebase.auth().currentUser
       }
    }

    BellBadge = () =>{
        return(
            <View>
                <Icon name='bell' type='font-awesome' color='blue'/>
                <Badge value={0} containerStyle={{position:'absolute', top:-6, right:-5}}/>
            </View>
        )
    }

    render(){
        return(
            <Header 
            leftComponent={<Icon name='bars' type='font-awesome' color='cyan' onPress={()=>this.props.navigation.toggleDrawer()}/>}
            centerComponent={{text:this.props.title, style:{color:'green', fontSize:30, fontWeight:10}}}
            rightComponent={<this.BellBadge {...this.props}/>}
            backgroundColor='orange'/>
        )
    }
}