import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const NumberBox = ({ text, onKeyPress }) => {
    const handleNumberPress = () => {
        const type = text == '=' ? 'equal' : 'number'
        return onKeyPress({ text, type });
    }

    return (
        <TouchableOpacity
            onPress={handleNumberPress}
            style={styles.container}
        >
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#505050',
        // borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '33.33%',
        height: '25%'
    },
    text: {
        color: '#fff',
        fontSize: 24,
    }
})

export default NumberBox