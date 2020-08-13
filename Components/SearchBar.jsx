import React, { useState } from "react";
import { View } from "react-native";
import { Dropdown } from "react-native-material-dropdown";

export default function SearchBar(props) {
  let data = [
    {
      value: "Andhra Pradesh",
    },
    {
      value: "Karnataka",
    },
    {
      value: "Telangana",
    },
  ];

  const updatePlace = (place) => {
    props.setPlace(place);
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 40,
      }}
    >
      {console.log(props.stateLists, "venkatesh")}
      <Dropdown
        data={props.stateLists}
        value={props.state}
        baseColor="rgba(0,0,255,0.5)"
        textColor="rbga(0, 255,0,0.5)"
        containerStyle={{ width: 300 }}
        onChangeText={updatePlace}
      />
    </View>
  );
}
