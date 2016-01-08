/*
** Router from https://github.com/exponentjs/ex-navigator
*/

const React = require('react-native');
const styles = require('./styles');
const {
  View,
  Image,
  Text
} = React;

var Router = {
  Settings() {
    return {
      getSceneClass() {
        return require('./src/Settings'); 
      },
      getTitle() {
        return <Text style={[styles.fontFamilyBold
          , styles.primaryFontSize
          , styles.primaryTextColor]}>
          Hyderabad Palace
        </Text>
      }
    }
  },
  Menu() {
    return {
      getSceneClass() {
        return require('./src/Menu');
      },
      getTitle() {
        return <Text style={[styles.fontFamilyBold
          , styles.primaryFontSize
          , styles.primaryTextColor]}>
          Hyderabad Palace
        </Text>
      },
      renderScene(navigator) {
        let MenuScene = this.getSceneClass();
        return <ProfileScene navigator={navigator} />
      } 
    }
  },
  Home() {
    return {
      getSceneClass() {
        return require('./src/Home');
      },
      getTitle() {
        return <Text style={[styles.fontFamilyBold
          , styles.primaryFontSize
          , styles.primaryTextColor]}>
          Hyderabad Palace
        </Text>
      }
    }
  },
  Index() {
    return {
      getSceneClass() {
        return require('./src/Index');
      },
      getTitle() {
        return <Text style={[styles.fontFamilyBold
          , styles.primaryFontSize
          , styles.primaryTextColor]}>
          Hyderabad Palace
        </Text>
      }
    }
  },
  AboutUs() {
    return {
      getSceneClass() {
        return require('./src/AboutUs');
      },
      getTitle() {
        return <Text style={[styles.fontFamilyBold
          , styles.primaryFontSize
          , styles.primaryTextColor]}>
          Hyderabad Palace
        </Text>
      }
    }
  },
  ContactUs() {
    return {
      getSceneClass() {
        return require('./src/ContactUs');
      },
      getTitle() {
        return <Text style={[styles.fontFamilyBold
          , styles.primaryFontSize
          , styles.primaryTextColor]}>
          Hyderabad Palace
        </Text>
      }
    }
  }
};

module.exports = Router;