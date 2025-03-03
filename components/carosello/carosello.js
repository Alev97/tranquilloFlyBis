import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const images = 
[
  { id: 1, source: require('./img/img1.jpg') },
  { id: 2, source: require('./img/img2.jpg') },
  { id: 3, source: require('./img/img3.jpg') },
  { id: 4, source: require('./img/img4.jpg') },
  { id: 5, source: require('./img/img5.jpg') },
  { id: 6, source: require('./img/img6.jpg') },
  { id: 7, source: require('./img/img7.jpg') },
  { id: 8, source: require('./img/img8.jpg') },
  { id: 9, source: require('./img/img9.jpg') },
  { id: 10, source: require('./img/img10.jpg') },
  { id: 11, source: require('./img/img11.jpg') },
];

const { width, height } = Dimensions.get('window');

const shuffleArray = (array) => {
    let shuffledArray = [...array]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; 
    }
    return shuffledArray;
  };

  const Carosello = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
    const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);
    const [shuffledImages, setShuffledImages] = useState(shuffleArray(images)); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledImages.length); 
    }, 2200);

    return () => clearInterval(intervalId); 
  }, [shuffledImages]); 

  useEffect(() => {
    const onChange = ({ window }) => {
      setScreenWidth(window.width);
      setScreenHeight(window.height);
    };

    Dimensions.addEventListener('change', onChange); // per quando si gira lo schermo o cambia la dimensione della finestra 

    return () => Dimensions.removeEventListener('change', onChange);
  }, []);


  return (
    <View style={styles.carouselContainer}>
      <Image
        source={shuffledImages[currentIndex].source}
        style={styles.image} 
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    justifyContent: 'center', 
    alignItems: 'center',
    padding: width * 0.02
  },
  carouselItem: {
    marginRight: 10,
  },
  image: {
    borderRadius: 10, 
    width: '100%',
    height: '100%',
  },
});


export default Carosello;