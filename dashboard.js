import React, { Component } from 'react'
import { SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View} from 'react-native'
import Header from './components/Header'
import Attendance from './components/Attend'
import Course from './components/Course'
import Exam from './components/Exam'
import Discussion from './components/Discussion'

import Certificate from './components/Certificate'
import Notebook from './components/Notebook'
import Upcoming from './components/Upcoming'
import Following from './components/Following'
import Footer from './components/Footer'
export default class Dashboard extends Component {
    render() {
        return (
            <View style={{flex:1}}>

                <ScrollView
                scrollEventThrottle={16}
                nestedScrollEnabled = {true}>
                    <Header/>
                    <Attendance/>
                    <Course/>
                    <Discussion/>
                    <Certificate/>
                    <Notebook/>
                    <Upcoming/>
                    <Following/>
                </ScrollView>
                <Footer/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
