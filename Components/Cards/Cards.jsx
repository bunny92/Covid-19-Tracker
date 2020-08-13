import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Card, Icon, Button, ListItem } from "react-native-elements";
import AnimateNumber from "react-native-countup";

const Cards = (props) => {
  return (
    <View>
      <Text style={styles.heading}>
        <Text>Case update</Text>
      </Text>
      <Text style={styles.timeDate}>
        <Text>State: {props.data.state}</Text>
      </Text>
      <Text style={styles.timeDate}>
        <Text>
          Newest update: {new Date(props.data.lastupdatedtime).toDateString()}
        </Text>
      </Text>
      <Card borderRadius={20} style={{}}>
        <View>
          <AnimateNumber
            style={styles.ConfirmedText}
            value={props.data.active}
            interval={2.75}
            countBy={1000}
          />
          <Text style={{ alignSelf: "stretch", color: "#778899" }}>Active</Text>
        </View>
      </Card>
      <Card borderRadius={20} style={{}}>
        <View>
          <AnimateNumber
            style={styles.ConfirmedText}
            value={props.data.confirmed}
            interval={2.75}
            countBy={1000}
          />
          <Text style={{ alignSelf: "stretch", color: "#778899" }}>
            Infected
          </Text>
        </View>
      </Card>
      <Card borderRadius={20}>
        <View>
          <AnimateNumber
            style={styles.RecoveredText}
            value={props.data.recovered}
            interval={2.75}
            countBy={1000}
          />
          <Text style={{ alignSelf: "stretch", color: "#778899" }}>
            Recovered
          </Text>
        </View>
      </Card>
      <Card borderRadius={20}>
        <View>
          <AnimateNumber
            style={styles.DeathsText}
            value={props.data.deaths}
            interval={2.75}
            countBy={1000}
          />
          <Text style={{ alignSelf: "stretch", color: "#778899" }}>Deaths</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  timeDate: {
    marginLeft: 23,
    marginBottom: 5,
    alignSelf: "stretch",
    color: "#778899",
    fontSize: 10,
  },
  heading: {
    marginLeft: 20,
    marginBottom: 8,
    alignSelf: "stretch",
    fontSize: 22,
  },
  ConfirmedText: {
    fontSize: 30,
    color: "rgba(0, 0, 255, 0.5)",
    marginTop: 10,
  },
  RecoveredText: {
    fontSize: 30,
    color: "rgba(0, 255, 0, 0.5)",
    marginTop: 10,
  },
  DeathsText: {
    fontSize: 30,
    color: "rgba(255, 0, 0, 0.5)",
    marginTop: 10,
  },

  subTitle: {
    fontSize: 5,
    color: "grey",
    alignItems: "center",
  },
});
export default Cards;
