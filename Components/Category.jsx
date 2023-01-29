import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Card } from "@ui-kitten/components";

export default function Category(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Notes list", {
          categoryName: props.categoryName,
          setNotesList: props.setNotesList,
          notesList: props.notesList,
        })
      }>
      <Card style={styles.card}>
        <View style={styles.conteiner}>
          <View>
            <Text style={styles.categoryName}>{props.categoryName}</Text>

            <Text style={styles.categoryNum}>
              {
                //To count all the notes from the same category
                props.notesList.filter(
                  (note) => note.categoryName == props.categoryName
                ).length
              }
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryName: {
    fontSize: 40,
    fontFamily: "AppleSDGothicNeo-Bold",
    color: "white",
  },

  categoryNum: {
    fontSize: 25,
    fontFamily: "AppleSDGothicNeo-Bold",
    color: "white",
    textAlign: "center",

  },

  conteiner: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  card: {
    width: 400,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#24527A",
  },
});
