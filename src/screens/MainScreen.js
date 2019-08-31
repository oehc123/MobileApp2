import React, { Component } from 'react'
import { Header } from 'react-native-elements'

export default class MainScreen extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'FOODWIZE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                containerStyle={{
                    backgroundColor: '#7dbf5c',
                    justifyContent: 'space-around',
                }}
            />
        )
    }
}
