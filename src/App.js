import React from 'react';
import {View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';
import NativeLinkingManager from 'react-native/Libraries/Linking/NativeLinkingManager';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub='https://avatars.githubusercontent.com/u/38932268?v=4';
const urlToMyGithub='https://github.com/igorfnogueira';

const App = () => {

  const handlePressGoToGithub = async ()=>{
    const res = await Linking.canOpenURL(urlToMyGithub);
    if(res){
      await Linking.openURL(urlToMyGithub);
    }

  }
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image 
          accessibilityLabel='Igor Fonseca' 
          style={style.avatar} 
          source={{uri:imageProfileGithub}}
        />

        <Text accessibilityLabel='Nome: Igor Fonseca Nogueira' 
          style={[style.defaultText,style.name]}>
          Igor Fonseca Nogueira
        </Text>

        <Text accessibilityLabel='Nickname: igorfnogueira' 
          style={[style.defaultText,style.nickname]}>
          igorfnogueira
        </Text>

        <Text accessibilityLabel='Descrição: Graduado em Ciência e Tecnologia - UNIFESP | Estudando Análise e Desenvolvimento de Sistemas - UNINTER' 
          style={[style.defaultText,style.description]}>
          Graduado em Ciência e Tecnologia - UNIFESP | Estudando Análise e Desenvolvimento de Sistemas - UNINTER
        </Text>

        <Pressable onPress={handlePressGoToGithub}>  
          <View style={style.button}>
            <Text style={[style.defaultText,style.textButton]}>Open in Github</Text>
          </View>
        </Pressable>

      </View>
      
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor:colorGithub,
    flex: 1, //expandi para a tela inteira
    justifyContent:'center',
    alignItems:'center',

  },
  content:{
    alignItems:'center',
    padding:20,
  },

  avatar:{
    height:200,
    width:200,
    borderRadius:100,
    borderColor:'white',
    borderWidth:2,
  },
  defaultText:{
    color:colorFontGithub,
  },
  name:{
    marginTop:20,
    fontWeight:'bold',
    fontSize:24,

  },
  nickname:{
    fontSize:18,
    color:colorDarkFontGithub,
  },
  description:{
    fontWeight:'bold',
    fontSize:14,
  },
  button:{
    backgroundColor:colorDarkFontGithub,
    borderRadius:10,
    padding:20,
  },
  textButton:{
    fontWeight:'bold',
    fontSize:16,
  },

  
});
