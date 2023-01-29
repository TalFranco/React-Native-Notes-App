import React from "react";
import NotesList from "../Components/NotesList";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, TouchableOpacity, View } from "react-native";


export default function CategoryPage(props) {
  const categoryName = props.route.params.categoryName;
  const notesList = props.route.params.notesList;
  const setNotesList = props.route.params.setNotesList;

  return (
    <View>
      <ScrollView>
        <NotesList
          notesList={notesList}
          categoryName={categoryName}
          setNotesList={setNotesList}></NotesList>
      </ScrollView>

      <TouchableOpacity
        style={styles.icon}
        title="go2add"
        onPress={() =>
          props.navigation.navigate("Add Note", {
            categoryName: categoryName,
            notesList: notesList,
            setNotesList: setNotesList,
          })
        }>
        <Icon name="add" size={60} color={"#24527A"} />
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  icon: {
    alignItems: "right",
    backgroundColor: "#D3D3D3",
    borderRadius: 50,
    width: 60,
    height: 60,
    margin: 30,
    left: 320,
    position: "absolute",
    top: 600,
  },
});