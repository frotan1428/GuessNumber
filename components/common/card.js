import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../contants/colors'

const Card = ({cardStyle, children}) => {
  return (
    <View style={[styles.card, cardStyle]}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card:{
        backgroundColor: colors.color2,
        padding: 20,
        borderWidth:2,
        borderColor: colors.color1,
        borderRadius:5,
        alignItems:"center"
    }
})