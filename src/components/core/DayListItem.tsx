import { Text,View,StyleSheet } from "react-native";
type DayListItem={
    days:number;
};

export default function DayListItem({days}:DayListItem) {
    return(
        <View style={styles.box} >
        <Text style={styles.text}>{days}</Text>
        </View>
    );
   
}

const styles = StyleSheet.create({
 
    box:{
      backgroundColor:'#F9EDE3',
      // width:100,
      // height:100,
      flex:1,
      aspectRatio:1,
  
  
      borderWidth:StyleSheet.hairlineWidth,
      borderColor:'#9b4521',
      borderRadius:20,
  
      justifyContent:'center',
      alignItems:'center',
      
    },
    text:{
      color:'#9b4521',
      fontSize:70,
      fontFamily:'AmaticBold',

    },
  });
  