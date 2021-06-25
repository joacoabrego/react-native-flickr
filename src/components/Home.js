import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container:{
     flex: 1,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-evenly'
 }
});

const Home = ({ navigation }) =>{
    return(
        <View style={styles.container}>
            <Button 
                onPress={()=> navigation.navigate('albumList')}
                title='Fetch Albums!'
            >
            </Button>
            <Button title="Type n' Search">
            </Button>
        </View>
    );
};


export default Home;