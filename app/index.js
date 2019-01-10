import React, {Component} from 'react'
import {View, Text, StyleSheet } from 'react-native'
// import MyAnimeList from './MyAnimeList'
import MyAnimeList from './MyAnimeList1'


class Index extends Component {

    render() {
        return(
            <View style={styles.container}>
                <MyAnimeList/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        flex: 0.2,
        backgroundColor: 'red',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    content: {
        flex: 3,
    },
    contentText: {
        alignSelf: 'center',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20
    },
    footer: {
        flex: 0.3,
        backgroundColor: 'orange',
        justifyContent: 'center'
    },
    footerText: {
        alignSelf: 'center',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20
    },
})

export default Index;