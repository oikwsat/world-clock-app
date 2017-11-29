import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from "moment";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: moment().format("LTS"),
      date: moment().format("ll"),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: moment().format("LTS"),
        date: moment().format("ll"),
      })
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>World-Clock-App!</Text>
        <Text style={styles.timeText}>{this.state.time}</Text>
        <Text style={styles.dateText}>{this.state.date}</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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
  timeText: {
    color: '#666',
    fontSize: 60,
  },
  dateText: {
    color: '#666',
    fontSize: 30,
  },
});
