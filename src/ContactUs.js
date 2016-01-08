// code import
const React = require('react-native');
import ExNavigator from '@exponent/react-native-navigator';
const styles = require('../styles');
const {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	MapView,
} = React;

var regionText = {
	latitude: 0,
	longitude: 0,
	latitudeDelta: 0,
	longitudeDelta: 0
};

// create component
let ContactUs = React.createClass({
	render: function () {
		return (
			<ScrollView>
				<View style={[styles.container
					, styles.paddingTop]}>
					<Text style={[styles.fontFamilyBold
						
						, styles.paddingLeft
						, styles.paddingRight
						, styles.secondaryFontSize]}>
						ContactUs
					</Text>
					<Text style={[styles.fontFamily
						, styles.padding
						, styles.secondaryFontSize]}>
						We are here to help. Tap below to email us or to speak with customer service representative.
					</Text>
					<View style={[_styles.emailView
						
						]}>
						<Image source={require('./images/email-white.png')}
	                		style={[styles.icon]}>
	                	</Image>

						<Text style={[styles.fontFamilyBold
							, styles.primaryFontSize,
							
							, styles.primaryTextColor
							, styles.paddingLeft]}>
							Email Us
						</Text>
					</View>
					<View style={[styles.paddingTop,styles.paddingBottom]}>
					</View>
					<View style={[_styles.phoneView
											 
						]}>
						<Image source={require('./images/phone-white.png')}
	                		style={[styles.icon]}>
	                	</Image>

						<Text style={[styles.fontFamilyBold
							, styles.primaryFontSize,
							
							, styles.primaryTextColor
							, styles.paddingLeft]}>
							Call 1-757-412-9069
						</Text>
					</View>
					<View style={[styles.paddingLeft
						, styles.paddingRight
						, styles.paddingBottom]}>
						<View style={[_styles.dayTimeView, styles.paddingTop]}>
							<Text style={[styles.secondaryFontSize
								, styles.fontFamily]}>
								Monday-Friday
							</Text>
							<Text style={[styles.secondaryFontSize
								, styles.fontFamily]}>
								7AM - 11PM EST
							</Text>
						</View>
						<View style={[_styles.dayTimeView, styles.paddingTop]}>
							<Text style={[styles.secondaryFontSize
								, styles.fontFamily]}>
								Saturday
							</Text>
							<Text style={[styles.secondaryFontSize
								, styles.fontFamily]}>
								7AM - 10PM EST
							</Text>
						</View>
						<View style={[_styles.dayTimeView, styles.paddingTop]}>
							<Text style={[styles.secondaryFontSize
								, styles.fontFamily]}>
								Sunday
							</Text>
							<Text style={[styles.secondaryFontSize
								, styles.fontFamily]}>
								8AM - 11PM EST
							</Text>
						</View>
					</View>
					
				</View>
			</ScrollView>
		);
	}
});

const _styles = StyleSheet.create({
	emailView: {
		backgroundColor: '#801A1E',
		flexDirection : 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 64
	},
	phoneView: {
		backgroundColor: '#801A1E',
		flexDirection : 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 64
	},
	dayTimeView: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});

module.exports = ContactUs;