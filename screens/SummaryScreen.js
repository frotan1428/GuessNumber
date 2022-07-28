import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/common/header";
import IconButton from "../components/common/icon-button";
import Spacer from "../components/common/spacer";
import Card from "../components/common/card";

const SummaryScreen = (props) => {
  const { setGameStatus, gameResult, totalPoint, randomNumber, timer, shot } = props;
  return (
    <View style={styles.container}>
      <Header title="Game Summary" />
      <View style={styles.content}>
        <Text>
          {gameResult === "win"
            ? "🏆🏆🏆 YOU WIN 🏆🏆🏆"
            : "👎👎👎 YOU LOST 👎👎👎"}
        </Text>

        <Spacer />

        <Card>
          <Text>{totalPoint}</Text>
          <Text>Point</Text>
        </Card>

        <Spacer />

        <View>
          <Text>Sumarry</Text>
          <Text>The number was: {randomNumber}</Text>
          <Text>Total time: {timer} </Text>
          <Text>Total shot: {shot} </Text>
        </View>

        <Spacer />

        <IconButton
          title="Re Start The Game"
          icon="gamepad-variant-outline"
          onPress={() => setGameStatus("game")}
        />
      </View>
    </View>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
