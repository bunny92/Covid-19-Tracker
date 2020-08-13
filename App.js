import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { ThemeProvider } from "react-native-elements";
import Cards from "./Components/Cards/Cards.jsx";
import { getCurrentPlace, listState, statewisecount } from "./api";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
export default function App() {
  const [fecthedData, setFetchedData] = useState([]);
  const [fecthedState, setFetchedState] = useState("");
  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    const fetchState = async () => {
      let statecount = await listState();
      let states = [];
      statecount.statewise.map((item) => {
        states.push({ value: item.state });
      });
      setStateList(states);
    };
    fetchState();

    navigator.geolocation.getCurrentPosition(geoSuccess);
  }, []);

  const geoSuccess = (position) => {
    const fetchPlace = async () => {
      let FetchedPlace = await getCurrentPlace(
        position.coords.latitude,
        position.coords.longitude
      );
      setFetchedData(await statewisecount(FetchedPlace.state));
      setFetchedState(FetchedPlace.state);
    };
    fetchPlace();
  };

  const setPlace = (state) => {
    const fetchState = async () => {
      let FetchedPlace = await statewisecount(state);
      setFetchedData(FetchedPlace);
      setFetchedState(FetchedPlace.state);
    };
    fetchState();
  };

  return (
    <ThemeProvider>
      {/* {console.log(stateList, "propsprops")} */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Header />
          <SearchBar
            setPlace={setPlace}
            state={fecthedState}
            stateLists={stateList}
          />
          <Cards data={fecthedData} />
        </View>
      </ScrollView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // fontFamily: "lucida grande",
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
