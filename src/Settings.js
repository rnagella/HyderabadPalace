// import code
let React = require('react-native');
var Router = require('../Router.js');
let {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	SwitchIOS,
	TextInput,
} = React

// create class
let Settings = React.createClass({
	render: function () {
		return (
			<ScrollView>
				<View style={styles.container}>
					<Text style={[styles.myFontFamily
						, styles.fontWeightBold
						, styles.paddingLeft
						, styles.paddingRight
						, styles.largeFont]}>
						Settings
					</Text>
					<Text style={[styles.myFontFamily
						, styles.fontWeightBold
						, styles.paddingLeft
						, styles.paddingRight
						, styles.mediumFont]}>
						Push Notifications
					</Text>
				</View>
				<View style={[styles.newsSpecialOffer]}>
					<Text style={[styles.myFontFamily
						, styles.paddingLeft
						, styles.mediumFont]}>
						News & Special Offers
					</Text>
					<SwitchIOS style={{marginRight: 10}}>
					</SwitchIOS>
				</View>
				<Text style={[styles.myFontFamily
					, styles.paddingRight
					, styles.paddingLeft
					, styles.mediumFont]}>
						Be the first to know about exclusive offers and promotions, new products and more. 
				</Text>
				<View style={[styles.newsSpecialOffer]}>
					<Text style={[styles.myFontFamily
						, styles.paddingLeft
						, styles.mediumFont]}>
						Email
					</Text>
					<SwitchIOS style={{marginRight: 10}}>
					</SwitchIOS>
				</View>
				<TextInput style={[
					{marginRight: 10,
					marginLeft: 10,height: 40, borderColor: 'gray', borderWidth: 1}]}>
				</TextInput>
				<View style={[styles.newsSpecialOffer]}>
					<Text style={[styles.myFontFamily
						, styles.paddingLeft
						, styles.mediumFont]}>
						SMS
					</Text>
					<SwitchIOS style={{marginRight: 10}}>
					</SwitchIOS>
				</View>
				<TextInput style={[
					{marginRight: 10,
					marginLeft: 10,height: 40, borderColor: 'gray', borderWidth: 1}]}>
				</TextInput>
				<Text style={[styles.paddingTop
					, styles.paddingLeft
					, styles.fontFamily
					, styles.primaryTextColor]}>
					App Version 1.0
				</Text>
			</ScrollView>
		);
	}
});

let styles = StyleSheet.create({
	container: {
		flex: 1
	},
	container: {
		flex: 1
	},
	icon: {
	    height: 33,
	    width: 33,
  	},
	fontColorWhite: {
		color: '#fff'
	},
	newsSpecialOffer: {
		flex: 1,
		flexDirection : 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 44
	},
	myFontFamily: {
		fontFamily: 'Cochin'
	},
	fontWeightBold: {
		fontWeight: 'bold'
	},
	largeFont: {
		fontSize: 20
	},
	mediumFont: {
		fontSize: 16
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

module.exports = Settings;
