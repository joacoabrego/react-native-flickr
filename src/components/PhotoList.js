import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, FlatList } from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';
import Spinner from './Spinner';

const PhotoList = ({route}) => {
  console.log('functional photolist', route.params.albumId);
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () =>{
      const { data } = await axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${route.params.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`,
      );

      setPhotos(data.photoset.photo);
    }
      fetchPhotos();
  }, []);

  const renderItem = ({item}) => (
      <PhotoDetail
        key={item.title}
        title={item.title}
        imageUrl={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
      />
  )

  if (!photos) {
    return (
      <View style={{flex: 1}}>
        <Spinner text='Loading photos...'/>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <FlatList 
        data={photos} 
        renderItem={renderItem}
      />
    </View>
  );
}

export default PhotoList;
