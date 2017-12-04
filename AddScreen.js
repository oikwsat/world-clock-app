import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AddScreen extends React.Component {
  static navigationOptions = {
    title: 'Add',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>検索フォーム</Text>
        <Text>検索結果</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
