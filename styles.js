/*
Styles: define styles required for the application.
*/
const React = require('react-native');
const {
	StyleSheet
} = React;

const styles = StyleSheet.create({
	fontFamily: {
		fontFamily: 'Cochin'
	},
	fontFamilyBold: {
		fontFamily: 'Cochin-Bold'
	},
	fontFamilyItalic: {
		fontFamily: 'Cochin-Italic'
	},
	primaryTextColor: {
		color: '#fff'
	},
	primaryFontSize: {
		fontSize: 20
	},
	secondaryFontSize: {
		fontSize: 17
	},
	fontWeightBold: {
		fontWeight: 'bold'
	},
	icon: {
    	height: 33,
    	width: 33,
  	},	
  	navBarColor: {
    	backgroundColor: '#801A1E'
  	},
  	barColor: {
  		backgroundColor: '#801A1E'
  	},
  	container: {
		flex: 1
	},
	paddingTop: {
		paddingTop: 10
	},
	paddingBottom: {
		paddingBottom: 10
	},
	paddingLeft: {
		paddingLeft: 10
	},
	paddingRight: {
		paddingRight: 10
	},
	padding: {
		padding: 10
	}
}); 

module.exports = styles;
