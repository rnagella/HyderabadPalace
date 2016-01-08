// import code
let React = require('react-native');
var Router = require('../Router.js');
import ExNavigator from '@exponent/react-native-navigator';

let {
	StyleSheet,
	View,
	Text
} = React;

// create component
let AboutUs = React.createClass({
	render: function () {
		return <View style={[styles.paddingLeft, styles.paddingRight]}>
			<View style={[styles.paddingBottom,
				styles.paddingTop]}>
				<Text style={[styles.myFontFamily,
					styles.largeFont, styles.fontWeightBold]}> 
				AboutUs </Text>
			</View>
			<View style={[]}>
				<Text style={[styles.myFontFamily,
					styles.paddingBottom, 
					styles.mediumFont]}>
					At Hyderabad Palace, good food meets great times. Hyderabad is an iconic city in southern India.The city is renowned for eateries with delicious food. We believe Hyderabadi Dum Biryani is the real Kohinoor of Hyderabad. Hyderabad Palace is a humble attempt to bring the delicious food and good dining atmosphere to US cities. 
				</Text>
				<Text style={[styles.myFontFamily, styles.mediumFont]}>
					We serve authentic Hyderabadi Dum Biryani at Hyderabad Palace. Our Hyderabadi Dum Biryani will surely remind you of home. Your taste buds will say thank you! Our setting is family friendly. We place a lot of emphasis on our Kids Menu to make it an enjoyable experience for Kids as well. 
				</Text>
			</View>
		</View>
	},
	borderColor: function () {
		return {
			borderColor: 'green',
			borderWidth: 4
		}
	}
});

// create styles
let styles = StyleSheet.create({
	myFontFamily: {
		fontFamily: 'Cochin'
	},
	largeFont: {
		fontSize: 20
	},
	mediumFont: {
		fontSize: 16
	},
	fontWeightBold: {
		fontWeight: 'bold'
	},
	paddingLeft: {
		paddingLeft: 10
	},
	paddingRight: {
		paddingRight: 10
	},
	paddingTop: {
		paddingTop: 10
	},
	paddingBottom: {
		paddingBottom: 10
	}
});

// export module
module.exports = AboutUs;


