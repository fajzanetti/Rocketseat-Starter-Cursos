import React, { Component } from 'react'
import { Text, View } from 'react-native'

import api from '../services/api'

export default class main extends Component {

    state = {
        docs: []
    }

    componentDidMount(){
        this.loadProducts()
    }

    loadProducts = async () => {
        const response = await api.get('/products')

        const { docs } = response.data

        this.setState({ docs })
    }

    render() {
        return (
            <View>
                <Text> Hello World ! </Text>
                {this.state.docs.map(product => {
                    return <Text key={product._id}>{product.title}</Text>
                })}
            </View>
        )
    }
}
