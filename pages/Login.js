import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Faça o seu login no App{`\n`} e escolha a sua imagem favorita!</Text>
      <Text style={{alignSelf: 'flex-start', left: 55, color: 'gray'}}>Apelido</Text>
      <TextInput style={styles.textInput}
        onChangeText={setName}
        value={name}
        placeholder="Apelido"
      ></TextInput>
      <Text style={{alignSelf: 'flex-start', left: 55, color: 'gray'}}>Senha</Text>
      <TextInput style={styles.textInput}
        onChangeText={setPassword}
        value={password}
        placeholder="Senha"
        secureTextEntry={true}
      ></TextInput>
      <TouchableOpacity onPress={() => navigation.navigate("List")} style={styles.button}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',  
    color: 'gray',
    paddingBottom: 180
  },
  textInput: {
    margin: 5,
    width: 300, 
    height: 35,
    backgroundColor: "white",
    textAlign: 'center',
    color: "black",
    fontSize: 20,
  },
  button: {
    margin: 10,
    backgroundColor: 'black',
    width: 150, 
    height: 50,
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