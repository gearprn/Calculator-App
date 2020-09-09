import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const OperatorBox = ({ text, onKeyPress }) => {
    const handleOperatorPress = () => {
        const type = text == 'DEL' ? 'delete' : 'operator'
        return onKeyPress({ text, type });
    }

    return (
        <TouchableOpacity
            onPress={(handleOperatorPress)}
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: '20.8%',
        backgroundColor: '#ff9500',
    },
    text: {
        color: '#fff',
        fontSize: 24,
    }
})

export default OperatorBox