import React from 'react';
import { Image, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const List = ({ navigation }) => {
  const [images, setimages] = React.useState([
    require('../assets/image1.jpg'),
    require('../assets/image2.jpg'),
    require('../assets/image3.jpg'),
    require('../assets/image4.jpg'),
    require('../assets/image5.jpg'),
    require('../assets/image6.jpg'),
    require('../assets/image7.jpg'),
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Escolha a sua imagem favorita</Text>
      <FlatList
        showsHorizontalScrollIndicator={false} 
        data={images}
        renderItem={ ({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image source={item}
              key={index} 
              style={styles.image}
            />
          </TouchableOpacity>
        )}       
      />
    </SafeAreaView>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink'
  },
  image: {
    width:395,
    height:300,
    resizeMode:'cover',
    margin:8
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',  
    color: 'black',
    paddingBottom: 18,
    paddingTop: 20
  },
});