import React, { Component } from 'react'
import { Text, View } from 'react-native'

import api from '../services/api'

export default class main extends Component {

    componentDidMount(){
        this.loadProducts()
    }

    loadProducts = async () => {
        const response = await api.get('/products')

        const { docs } = response.data

        console.log(docs)
    }

    render() {
        return (
            <View>
                <Text> Hello World ! </Text>
            </View>
        )
    }
}
