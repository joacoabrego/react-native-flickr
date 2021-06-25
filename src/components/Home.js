import React from 'react';
import { View, Button, StyleSheet, Image, Text, Insets } from 'react-native';

const styles = StyleSheet.create({
 buttonContainer:{
     flex: 10,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-around'
 },
 container:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
 },
 image:{
     aspectRatio: 0.5,
     resizeMode: 'contain',
 }
});

const Home = ({ navigation }) =>{
    return(      
        <View style={styles.container}>
            <View style={{flex: 2}}>
                <Image source={require('../../assets/images/logoUTN.png')} style={styles.image}/>
            </View>
            <View style={styles.buttonContainer}>
                <View style={{marginRight: 10}}>
                    <Button
                        onPress={()=> navigation.navigate('albumList')}
                        title='Fetch Albums!'
                    >
                    </Button>
                </View>    

                <View style={{marginLeft:10}}>
                    <Button title="Type n' Search">
                    </Button>
                </View>

            </View>
            <View style={{flex:2}}>
                <Text style={{textAlign: 'center'}}>
                    {'Universidad Tecnológica Nacional\n'}
                    {'Facultad Regional Córdoba\n'}
                    {'DSM'}
                </Text>
            </View>
        </View>
    );
};


export default Home;