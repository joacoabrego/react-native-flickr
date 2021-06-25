import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center"
    },
    textStyle:{
        textAlign: "center",
        color: "#6e6975"
    }
})

const Spinner = ({text}) =>{
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#2196F3"/>
            <Text style={styles.textStyle}>{text}</Text>
        </View>
    );
}

export default Spinner;