import React from 'react';
import { StyleSheet, Text, Switch, View } from 'react-native';

export default class SettingScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor(props) {
    super(props);

    this.state = {
      // 12 or 24 hour display mode
      hourDisplayMode: true,
      // display seconds display or undisplay
      showSeconds: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>24時間形式を使用</Text>
          <Switch
            style={styles.switch}
            onValueChange = {(value) => this.setState({hourDisplayMode: value})}
            value = {this.state.hourDisplayMode} />
          <Text style={styles.text}>秒を表示する</Text>
          <Switch
            style={styles.switch}
            onValueChange = {(value) => this.setState({showSeconds: value})}
            value = {this.state.showSeconds} />
        </View>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    margin: 20
  },
  switch: {
    margin: 20,
    marginTop: -41
  },
});
