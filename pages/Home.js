import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Parabéns{"\n"} você Escolheu a sua imagem favorita! </Text>
      <Text style={styles.subtitle}>Você pode continuar escolhendo mais imagens{`\n`} clicando em voltar.</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigation.navigate("List")} style={styles.buttonList}>
          <Text style={styles.textButton}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.buttonLogin}>
          <Text style={styles.textButton}>Sair</Text>
        </TouchableOpacity>
      </View>      
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    color: 'black'
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',  
    color: 'yellow',
    padding: 55,
    paddingTop: 100
  },
  subtitle: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',  
    color: 'white',
  },
  buttons: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 410
  },
  buttonList: {
    margin: 10,
    backgroundColor: 'black',
    width: 150, 
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth:2,
    borderColor:'white',
  },
  buttonLogin: {
    margin: 10,
    backgroundColor: 'red',
    width: 150, 
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth:2,
    borderColor:'white',
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',  
    color: 'white'
  }
});
