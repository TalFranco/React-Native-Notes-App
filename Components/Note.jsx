import { Alert, View } from "react-native";
import React from "react";
import { Card, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Input } from "react-native-elements";
import {Image } from "react-native";

export default function Note(props) {
  function showConfirmAlert() {
    Alert.alert(
      "Confirm",
      "Are you sure you want to delete?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => props.sendIdUp(props.id) },
      ],
      { cancelable: false }
    );
  }
  return (
    <View>
      <Card style={styles.card}>
        <Text style={styles.noteTitle}>{props.title}</Text>
        <Input
          leftIcon={{ type: "font-awesome", name: "calendar", color: "#fff" }}
          editable={false}
          value={props.date.split(",")[0]}
          style={styles.noteDate}
        />

        <View style={styles.imageContainer}>
          {props.image && (
            <Image source={{ uri: props.image }} style={styles.image} />
          )}
        </View>

        <Text style={styles.noteText}>{props.noteContent}</Text>

        <View style={styles.deleteIcon}>
          <TouchableOpacity onPress={showConfirmAlert}>
            <Icon type="font-awesome" name="delete" color="#e0e0e0" size={30} />
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 400,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#24527A",
  },
  noteTitle: {
    fontSize: 30,
    fontFamily: "AppleSDGothicNeo-Bold",
    color: "white",
    margin: 10,
  },
  noteText: {
    fontSize: 20,
    fontFamily: "AppleSDGothicNeo-Bold",
    color: "white",
    marginBottom: 30,
    margin: 10,
  },
  noteDate: {
    fontSize: 20,
    fontFamily: "AppleSDGothicNeo-Bold",
    color: "white",
    marginLeft: 10,
    paddingTop: 6,
  },
  header: {
    fontSize: 50,
    textAlign: "center",
    color: "#24527A",
    margin: 20,
    fontFamily: "AppleSDGothicNeo-Bold",
  },
  deleteIcon: {
    left: 320,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});
