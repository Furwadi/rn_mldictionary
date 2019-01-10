import React, {Component} from 'react'
import {View, Text, } from 'react-native'
import Glass from './components/Glass'
import Cup from './components/Cup'


class Index extends Component {

    componentWillMount() {
        console.log('Component Will Mount')
    }

    componentDidMount() {
        console.log('Component Did Mount')
    }

    render() {
        return(
            <View>
                <Cup/>
                <Glass/>
            </View>
        )
    }
}

export default Index;