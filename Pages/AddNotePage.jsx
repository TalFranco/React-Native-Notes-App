import {
  View,
  StyleSheet,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";

export default function AddNotePage(props) {
  const [noteTitle, setTitle] = useState("");
  const [noteContent, setNote] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [flag, setFlag] = useState(false);

  const date = new Date().toLocaleString();
  const categoryName = props.route.params.categoryName;
  const notesList = props.route.params.notesList;
  const setNotesList = props.route.params.setNotesList;

  const navigation = useNavigation();

  const handleInsert = () => {
    if (noteContent === "" || noteTitle === "") {
      Alert.alert("Please enter all required information");
    } else addNote();
  };

  const addNote = () => {
    const note = {
      id: notesList.length + 1,
      title: noteTitle,
      noteContent: noteContent,
      categoryName: categoryName,
      date: date,
      image: selectedImage,
    };
    setNotesList([...notesList, note]);
    setFlag(true);
  };

  useEffect(() => {
    if (flag === true) {
      Alert.alert("The information has been successfully updated");
      navigation.navigate("My Notes", {
        categoryName: categoryName,
        setNotesList: setNotesList,
        notesList: notesList,
      });
    }
  }, [notesList, flag]);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setSelectedImage(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Input
            value={date}
            leftIcon={{ type: "font-awesome", name: "calendar", color: "#fff" }}
            inputStyle={styles.inputDate}
            editable={false}
          />

          <TextInput
            style={styles.header}
            placeholder="Note header"
            onChangeText={setTitle}></TextInput>

          <TextInput
            style={styles.inputText}
            placeholder="Write your note..."
            onChangeText={setNote}></TextInput>

          <View style={styles.imageContainer}>
            {selectedImage && (
              <Image
                source={{ uri: selectedImage }}
                style={{ width: 200, height: 200 }}
              />
            )}
            <TouchableOpacity>
              <Icon
                name="image"
                size={60}
                color={"white"}
                onPress={pickImage}
              />
            </TouchableOpacity>
            
            <TouchableOpacity>
              <Text style={{ color: "white" }} onPress={pickImage}>
                Add image
              </Text>
            </TouchableOpacity>
          </View>

          <Button style={styles.button} title="Add" onPress={handleInsert}>
            Save
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    fontFamily: "AppleSDGothicNeo-Bold",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#fff",
  },
  card: {
    flex: 5,
    backgroundColor: "#24527A",
    borderRadius: 20,
    border: "1px solid black",
    padding: 20,
    width: "90%",
    marginBottom: 50,
  },
  inputText: {
    flex: 2,
    marginTop: 20,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 20,
  },
  inputDate: {
    paddingLeft: 15,
    paddingTop: 8,
    fontFamily: "AppleSDGothicNeo-Bold",
    color: "#fff",
    fontSize: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },

});
