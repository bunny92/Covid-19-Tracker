import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{ marginTop: 85 }}>
        <Text
          style={{
            fontSize: 25,
            color: "white",
            letterSpacing: 12,
          }}
        >
          COVID - 19
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "white",
            letterSpacing: 12,
          }}
        >
          TRACKER
        </Text>
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    height: 200,
    backgroundColor: "rgba(255, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
