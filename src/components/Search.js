import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, ScrollView, Image, KeyboardAvoidingView} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
        
        
    },
    searchBar:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10

    },
    imageList:{
        flex: 9,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        /* borderTopColor: '#ABB2B9',
        borderTopWidth: 1 */
        elevation: 10
    },
    input:{
        backgroundColor:"#ffffff",
        height: 40,
        width: 250
    }
})

const Search = ({navigation}) =>{
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const search = async () =>{
        const { data } = await axios
            .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6e8a597cb502b7b95dbd46a46e25db8d&text=${term}&per_page=5&format=json&nojsoncallback=1`,
        );
        setResults(data.photos.photo);
    }

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            if(term){search()}
        }, 500);
        
        return () =>{
            clearTimeout(timerId);
        }
    }, [term])
    const renderedPhotos = results.map((photo)=>{
            return(
                <Image 
                    key={photo.id}
                    source={{uri:`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}}
                    resizeMode='contain'
                    style={{width: 200, height:200}}
                />
            );
        })
    const renderItem = ({item}) =>(
                <Image 
                    key={item.id}
                    source={{uri:`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}}
                    resizeMode='cover'
                    style={{width: 300, height:300, alignSelf: 'center'}}
                />
    )   
    return(
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Text style={{paddingLeft:10, paddingRight:5, fontSize:18}}>Buscar: </Text>
                <TextInput
                    style={styles.input} 
                    value={term}
                    placeholder='   ¡Escriba algo!'
                    onChangeText={setTerm}
                />
            </View>
            <View style={styles.imageList}>
                <FlatList
                    contentContainerStyle={{justifyContent:'center', alignConten:'center', flexGrow:1}}
                    data={results}
                    renderItem={renderItem}
                    ListEmptyComponent={<Text style={{alignSelf:'center', color: '#a6a6a6'}}>No hay fotos todavía...</Text>}
                />
            </View>
        </View>
    );
}

export default Search;