import React from 'react'
import { WebView } from 'react-native-webview'
import { useRoute } from '@react-navigation/native'

export default function Product({navigation}){
    const route = useRoute()
    const product = route.params.product
    navigation.setOptions({
      title: product.title
    })

    return <WebView source={{ uri: product.url}} />

}