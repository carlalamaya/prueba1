import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList,ActivityIndicator } from 'react-native';
import DayListItem from './src/components/core/DayListItem';

import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { AmaticSC_400Regular,AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';

const days = [...Array(24)].map((val,index) => index+1 );
import { useEffect } from "react";
export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter:Inter_900Black,
    Amatic:AmaticSC_400Regular,
    AmaticBold:AmaticSC_700Bold,
  });

  useEffect (() =>{
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }

  },[fontsLoaded, fontError] )

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}


        renderItem={({item}) => <DayListItem days={item}/>}
        
        
      
      />
      {/* {days.map((days)=>(
        <View style={styles.box} key={days}>
        <Text style={styles.text}>{days}</Text>
        </View>
      ))}
       */}

     

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   

    gap:10,
  },
  content:{
    gap:10,
    padding:10,

  },

  column:{
    gap:10,
  },
  
});
