import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

export default props => {
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={styles.button}>{props.label}</Text>
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    button: {
        fontSize: 30,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#888'
    }
})