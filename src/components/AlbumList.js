import React, {useState, useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import { useEffect } from 'react/cjs/react.production.min';

const AlbumList = () =>{

  const [photoset, setPhotoset] = useState(null);
  
  useEffect(()=> {
    const fetchPhotoset = async () =>{
      const {data} = await axios
        .get(
          'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1',
        );
        setPhotoset(data.photosets.photoset)
    }
      fetchPhotoset();
  }, []);

  const renderAlbums = () => {
    return photoset.map((album) => (
      <AlbumDetail
        navigation={this.props.navigation}
        key={album.id}
        title={album.title._content}
        albumId={album.id}
      />
    ));
  }


  console.log(photoset);

  if (!photoset) {
    return <Text>Loading...</Text>;
  }
  
  return (
    <View style={{flex: 1}}>
      {/* TODO Replace ScrollView for FlatList */}
      <ScrollView>{this.renderAlbums()}</ScrollView>
    </View>
  );

}

export default AlbumList;
