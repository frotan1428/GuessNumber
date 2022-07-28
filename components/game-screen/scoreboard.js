import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../common/card";
import MCIcon from "@expo/vector-icons/MaterialCommunityIcons";

const ScoreBoard = ({ timer, shot }) => {
  return (
    <View style={styles.container}>
      <Card cardStyle={styles.cardLeft}>
        <Text style={styles.text}>
          <MCIcon name="progress-clock" size={20} /> {timer}
        </Text>
      </Card>

      <Card cardStyle={styles.cardRight}>
        <Text style={styles.text}>
          <MCIcon name="heart-multiple"  size={20}/> {shot}
        </Text>
      </Card>
    </View>
  );
};

export default ScoreBoard;

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  text:{
    fontSize:20
  },
  cardLeft:{
    flex:1,
    marginRight:10
  },
  cardRight:{
    flex:1,
    marginLeft:10
  }
});
