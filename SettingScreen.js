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
        <View style={styles.settings}>
          <View style={styles.row}>
            <Switch
              value={this.state.hourDisplayMode}
              onValueChange={(value) => this.setState({hourDisplayMode: value})}
            />
            <Text style={styles.text}>24時間形式を使用</Text>
          </View>

          <View style={styles.row}>
            <Switch
              value={this.state.showSeconds}
              onValueChange={(value) => this.setState({showSeconds: value})}
            />
            <Text style={styles.text}>秒を表示する</Text>
          </View>
        </View>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  settings: {
    marginBottom: 8,
    marginHorizontal: 8,
    padding: 16,
    borderRadius: 2,
    backgroundColor: '#FFF',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
  },
  text: {
    fontSize: 14,
    color: '#272d2d',
    fontWeight: '300',
  },
});
