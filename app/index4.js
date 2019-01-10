import React, {Component} from 'react'
import {View, StyleSheet } from 'react-native'
import NativeBaseAnatomy from './components/NativeBaseAnatomy'


class Index extends Component {

    render() {
        return(
            <View style={styles.container}>
                <NativeBaseAnatomy/>
            </View>
        )
    }
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
})