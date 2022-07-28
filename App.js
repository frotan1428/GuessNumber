import { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import gameInitials from "./contants/game-initials";
import GameScreen from "./screens/GameScreen";
import SummaryScreen from "./screens/SummaryScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import Toast from "react-native-toast-message";

export default function App() {
  const [gameStatus, setGameStatus] = useState("welcome"); //welcome | game | summary
  const [randomNumber, setRandomNumber] = useState();
  const [timer, setTimer] = useState(gameInitials.totalTime);
  const [shot, setShot] = useState(gameInitials.totalShot);
  const [gameResult, setGameResult] = useState(""); // win | lost
  const [totalPoint, setTotalPoint] = useState(0);

  return (
    <View style={styles.container}>
      {gameStatus === "welcome" ? (
        <WelcomeScreen setGameStatus={setGameStatus} />
      ) : gameStatus === "game" ? (
        <GameScreen
          randomNumber={randomNumber}
          setRandomNumber={setRandomNumber}
          timer={timer}
          setTimer={setTimer}
          shot={shot}
          setShot={setShot}
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          setGameResult={setGameResult}
          setTotalPoint={setTotalPoint}
        />
      ) : (
        <SummaryScreen
          setGameStatus={setGameStatus}
          gameResult={gameResult}
          totalPoint={totalPoint}
          timer={timer}
          shot={shot}
          randomNumber={randomNumber}
        />
      )}

      <Toast visibilityTime={2000} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
