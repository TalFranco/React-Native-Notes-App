import { View, Text } from 'react-native'
import React from 'react'
import Category from './Category';

export default function CategoryList(props) {
  return (
    <View>
      {props.categoryArry.map((category, index) => (
        <Category
          key={index}
          categoryName={category}
          notesList={props.notesList}
          setNotesList={props.setNotesList}
        />
      ))}
    </View>
  );
}