import React, {Component, PropTypes} from 'react'
import {View, Text} from 'react-native'

class Coffee extends Component {

    render() {
        const {type, bean, volume, info} = this.props

        return(
            <View>
                <Text>Coffee: {type}. and this is from {bean} bean, and its volume is {volume} liter</Text>
                <Text>Info: color({info.color}), taste({info.taste})</Text>
            </View>
        )
    }
}


export default Coffee