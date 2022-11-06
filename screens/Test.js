import React from "react";
import parse from "html-react-parser";
import {View, SafeAreaView, FlatList,Text, StyleSheet,TouchableOpacity} from 'react-native';

export default function Test() {
  const htmlString = `<h1>Hello World</h1>`;
  console.log(parse(htmlString))
  return (
  <SafeAreaView>
     {parse(htmlString)}
  </SafeAreaView>
  )
}