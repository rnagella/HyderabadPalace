// import code
const React = require('react-native');
const styles = require('./styles');
// ExNavigator should be imported with JavaScript 
// import, doesn't use require.
import ExNavigator from '@exponent/react-native-navigator';
const Router = require('./Router');
const Menu = require('./src/Menu');
const Index = require('./src/Index');
const {
  AppRegistry,
  View,
  Text,
  StatusBarIOS,
  TouchableHighlight,
  Navigation,
  Image
} = React;



// Create componet
let HyderabadPalace = React.createClass({
  getInitialState: function () {
    return {
    }
  },
  render: function () {
    // set status bar 
    StatusBarIOS.setStyle(1);
    return (
        <ExNavigator
            navigationBarStyle = {styles.navBarColor}
            initialRoute={Router.Settings()}
            navigator={navigator}
            style={[{flex: 1}]}
            sceneStyle={[{paddingTop: 64}]}
          ExNavigator/>
    );
  }
});

// Show the componet on the screen, one per application
AppRegistry.registerComponent('HyderabadPalace', () => HyderabadPalace); 
