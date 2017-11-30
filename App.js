import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from "moment-timezone";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: moment().tz(props.timezone).format("HH:mm:ss"),
      date: moment().tz(props.timezone).format("ll"),
    };

    setInterval(() => {
      this.setState({
        time: moment().tz(props.timezone).format("HH:mm:ss"),
        date: moment().tz(props.timezone).format("ll"),
      })
    }, 1000);
  }

  render() {
    return (
      <View style={styles.clock}>
        <Text style={styles.timeText}>{this.state.time}</Text>
        <Text style={styles.dateText}>{this.state.date}</Text>
        <Text style={styles.dateText}>{this.props.timezone}</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>World-Clock-App!</Text>
        <Clock style={{flex: 1}} timezone='Asia/Tokyo' />
        <Clock style={{flex: 2}} timezone='Europe/London' />
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
  clock: {
    flex: 1,
    backgroundColor: '#ddd',
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
