import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const days = [1,6,8];

export default function App() {
  return (
    <View style={styles.container}>

      {days.map((days)=>(
        <View style={styles.box}>
        <Text style={styles.text}>{days}</Text>
        </View>
      ))}
      

     

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    gap:10,
  },

  box:{
    backgroundColor:'#F9EDE3',
    width:300,
    height:300,

    borderWidth:StyleSheet.hairlineWidth,
    borderColor:'#9b4521',
    borderRadius:20,

    justifyContent:'center',
    alignItems:'center',
    
  },
  text:{
    color:'#9b4521',
    fontSize:70,
  },
});
