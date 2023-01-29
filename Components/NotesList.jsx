import { View, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import Note from "./Note";
import { Text } from "@ui-kitten/components";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function NotesList(props) {
  const navigation = useNavigation();
  const [flag, setFlag] = useState(false);

  var counter = 0;

  const removeNote = (id) => {
    setFlag(true);
    props.setNotesList((prev) => prev.filter((item) => item.id != id));
  };

  useEffect(() => {
    if (flag === true) {
      Alert.alert("The information has been successfully updated");
      navigation.navigate("My Notes", {
        categoryName: props.categoryName,
        setNotesList: props.setNotesList,
        notesList: props.notesList,
      });
    }
  }, [props.notesList, flag]);

  return (
    <View>
      <Text style={styles.header}>
        {props.categoryName}
        <Text> </Text> <Text> </Text>
        <Text> </Text> <Text> </Text>
        {props.notesList.forEach((note) => {
          if (props.categoryName == note.categoryName) counter++;
        })}
        {counter}
      </Text>

      {props.notesList.map(
        (note, index) =>
          props.categoryName == note.categoryName && (
            <Note
              id={note.id}
              key={index}
              title={note.title}
              image={note.image}
              noteContent={note.noteContent}
              date={note.date}
              sendIdUp={removeNote}
            />
          )
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    textAlign: "center",
    color: "#24527A",
    margin: 20,
    fontFamily: "AppleSDGothicNeo-Bold",
  },
});
