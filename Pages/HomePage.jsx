import { View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import React from "react";
import CategoryList from "../Components/CategoryList";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Button, Card, Modal, Text } from "@ui-kitten/components";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function HomePage(props) {
  const initNotesList = [
    {
      id: 1,
      title: "Team meeting",
      noteContent: "To summarize the team meeting from Sunday",
      categoryName: "Work",
      date: "01.01.2023",
    },
    {
      id: 2,
      title: "Goals ",
      noteContent: "Write professional goals for 2023",
      categoryName: "Work",
      date: "02.01.2023",
    },
    {
      id: 3,
      title: "Dress",
      noteContent: "To buy a dress for my sister Shlomit's wedding",
      categoryName: "Personal",
      date: "03.01.2023",
    },
  ];
  const initcategoryArry = ["Work", "Personal"];

  const [notesList, setNotesList] = useState([...initNotesList]);
  const [categoryArry, setCategoryArry] = useState([...initcategoryArry]);
  const [categoryName, setCategoryName] = useState("");
  const [visible, setVisible] = useState(false);

  const addCategoryArry = () => {
    if (checkCategory(categoryName) == true) {
      setCategoryArry([...categoryArry, categoryName]);
    } else if (!categoryName) {
      Alert.alert("Fill category name");
    } else {
      Alert.alert("Category already exist");
    }
  };

  const checkCategory = (categoryName) => {
    let tempArray = categoryArry.filter((category) => category == categoryName);
    if (tempArray.length == 0) return true;
  };

  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>My Notes</Text>
        </View>
        <ScrollView>
          <CategoryList
            notesList={notesList}
            setNotesList={setNotesList}
            categoryArry={categoryArry}></CategoryList>
        </ScrollView>

        <TouchableOpacity style={styles.icon} onPress={() => setVisible(true)}>
          <Icon name="add" size={60} color={"#24527A"} />
        </TouchableOpacity>

        <Modal
          visible={visible}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setVisible(false)}>
          <Card disabled={true}>
            <Text style={styles.text}>Category name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Add new category"
              onChangeText={setCategoryName}></TextInput>

            <Button
              style={{ marginTop: 15 }}
              onPress={() => {
                addCategoryArry(categoryName);
                setVisible(false);
              }}>
              Add new category
            </Button>
          </Card>
        </Modal>
      </View>
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
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  text: {
    color: "white",
    margin: 10,
    fontSize: 30,
    marginLeft: 55,
  },
  textInput: {
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
    height: 50,
    width: 300,
    fontSize: 20,
  },
  button: {
    width: 180,
    marginLeft: 65,
    marginTop: 10,
  },
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
