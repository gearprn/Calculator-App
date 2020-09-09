import React, { useState } from 'react'
import { View, StyleSheet, Text} from 'react-native'
import NumberBox from '../components/NumberBox'
import OperatorBox from '../components/OperatorBox'

const Home = () => {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '=']
    const operators = ['DEL', '+', '-', '*', '/']

    const [displayHist, setDisplayHistory] = useState('')
    const [hist, setHistory] = useState('')
    const [currentNumber, setCurrentNumber] = useState('0')
    const [lastKeyPress, setLastKeyPress] = useState({text: 'DEL', type: 'delete'})

    const handleKeyPress = (key) => {
        console.log(key)
        if (key.type == 'number') {
            if (lastKeyPress.type == 'operator') {
                setCurrentNumber(key.text)
                setHistory(hist + key.text)
            } else if (currentNumber == '0') {
                const num = currentNumber == '0' ? key.text : currentNumber + key.text;
                setCurrentNumber(num)
                setHistory(num)
            } else {
                setCurrentNumber(currentNumber + key.text)
                setHistory(hist + currentNumber)
            }
        } 
        
        else if (key.type == 'delete') {
            setCurrentNumber('0')
        } 
        
        else if (key.type == 'operator') {
            if (lastKeyPress.type == 'operator') {
                setHistory(hist.slice(0, hist.length - 1))
            }
            setHistory(hist + key.text)
        } 
        
        else {
            setDisplayHistory(hist)
            setCurrentNumber(eval(hist))
        }
        setLastKeyPress(key)
    }

    const mapNumbersToNumberBox = numbers.map((number, index) => {
        return (
            <NumberBox key={index} text={number} onKeyPress={handleKeyPress} />
        )
    })

    const mapOperatorsToOperatorBox = operators.map((operator, index) =>{
        return (
            <OperatorBox key={index} text={operator} onKeyPress={handleKeyPress} />
        )
    })

    return (
        <View>
            <View style={styles.resultContainer}>
                <Text style={[styles.textRight, styles.textHist]}>{hist}</Text>
                <Text style={[styles.textRight, styles.textResult]}>{currentNumber}</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.numberContainer}>
                    {mapNumbersToNumberBox}
                </View>
                <View style={styles.operatorContainer}>
                    {mapOperatorsToOperatorBox}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: '60%',
        width: '100%',
        flexDirection: 'row',
    },
    textHist: {
        fontSize: 20,
        marginTop: 30,
        marginRight: 20,
        color: '#fff'
    },
    textResult: {
        fontSize: 50,
        marginTop: 30,
        marginRight: 20,
        color: '#fff'
    },
    textRight: {
        textAlign: "right",
    },
    resultContainer: {
        height: '40%',
        width: '100%',
        backgroundColor: '#000'
    },
    operatorContainer: {
        height: '100%',
        width: '25%',
        // backgroundColor: '#505050'
    },
    numberContainer: {
        height: '100%',
        width: '75%',
        backgroundColor: '#505050',
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

export default Home