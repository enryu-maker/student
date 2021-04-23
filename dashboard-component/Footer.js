import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

export default class Footer extends Component {
    render() {
        return (
            <View style={styles.footer}>
                <TouchableOpacity>
                <Image source={require('../assets/Home.png')} 
                style={styles.home}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={require('../assets/search1.png')} 
                style={styles.home}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={require('../assets/myCourses.png')} 
                style={styles.home}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={require('../assets/profile.png')} 
                style={styles.home}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={require('../assets/more.png')} 
                style={styles.home}/>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer:{
        bottom:0,
        backgroundColor:'#512da8',
        flexDirection:'row',
        justifyContent:'space-around',
        height:70,
        position:'relative',
        borderTopEndRadius:15,
        borderTopStartRadius:15
    },
    home:{
        marginTop:14,
        height:40,
        width:40
    }
})
