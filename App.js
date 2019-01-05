import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  input: {
    backgroundColor: 'red',
    width: "100%"
  },
  blinks: {
    backgroundColor: 'pink',
    flex: 1,
    flexDirection: "row",
    width: 50
  }
});

class Blink extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return  <Text>{this.props.text}</Text>;
  }
}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: ""
    }
  }

  handleText = text => {
    this.setState({text});
  }

  render() {
    const { text } = this.state;
    let blinks;
    if(text.length !== 0){
      blinks = text.split(" ")
                   .map(text => <Blink style={styles.blinks} text={text} />)
    }

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type here"
          onChangeText={this.handleText}
        />
        {blinks ? blinks : null}
      </View>
    );
  }
}
