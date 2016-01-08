// import code
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  Text
} = React;

// Create componet

var HyderabadPalace = React.createClass({
  render: function () {
    return <View style={styles.container}>
      <Text> Welcome to HyderabadPalace</Text>
    </View>
  }
})

// create styles
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});

// Show the componet on the screen
AppRegistry.registerComponent('HyderabadPalace', () => HyderabadPalace); 
