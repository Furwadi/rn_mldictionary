import React, {Component} from 'react'
import {View, Text, TouchableOpacity } from 'react-native'


class Index extends Component {
    // state = {
    //     number: 0,
    //     text: ""
    // }


    constructor() {
        super();
        this.state = {
            number: 0,
            text: ""
        }
    }

    // The first method executed
    componentDidMount() {
        // setInterval(()=>{
        //     this.setState({
        //         number: this.state.number + 1
        //     })
        // }, 1000)
        
    }

    // Click Button Action
    handleClick(myName) {
        this.setState({
            number: this.state.number + 1,
            text: "Hello Furwadi"
        })
    }

    render() {
        const myName = "Furwadi"

        return(
            <View>
                <Text>Please Click Button Below</Text>
                <Text>{this.state.text}</Text>
                {/* <TouchableOpacity onPress={this.handleClick.bind(this)}>
                    <Text>Click</Text>
                </TouchableOpacity> */}

                <TouchableOpacity onPress={() => this.handleClick(myName)}>
                    <Text>Click</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Index;