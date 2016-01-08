// import code
let React = require('react-native');
let Dimensions = require('Dimensions');
let window = Dimensions.get('window');
let Router = require('../Router');
// let Router2 = require('./Router');
import ExNavigator from '@exponent/react-native-navigator';
let {
	View,
	Text,
	StyleSheet,
	ScrollView,
	StatusBarIOS,
	Navgator,
	NavgatorIOS,
} = React;

// create component
class Menu extends React.Component {
	render () {
		return (
			<View style={[styles.mainContainer]}>
				<View style={[styles.statusBar]}>
				</View>
				<View style={[styles.navigationBar]}>
					<Text style={[styles.navigationBarTitle
						, styles.fontWeightBold
						, styles.myFontFamily
						, styles.largeFont
						, styles.fontColorWhite
						]}>
						Menu
					</Text>
				</View>
				<ScrollView style={[styles.container]}>
					<View style={[]}>
						<Text style={[styles.text
							, styles.myFontFamily
							, styles.mediumFont
							, styles.fontWeightBold 
							]}
							onPress =  {() => {
								console.log('Facebook');
								// let route = Router2.getSettingsRouter();
								//console.log(navigator.push(route));
								// this.props.navigator.push(route);
							}}>
							Sign in with Facebook
						</Text>
						<View style={[styles.horizontalSeperator]}>
						</View>
						{/*<Text style={[styles.text
													, styles.myFontFamily
													, styles.mediumFont
													, styles.fontWeightBold 
													]}>
													Contact Us
												</Text>*/}
						
						<View style={[styles.horizontalSeperator]}>
						</View>
						<Text style={[styles.text
							, styles.myFontFamily
							, styles.mediumFont
							, styles.fontWeightBold 
							]}>
							Settings
						</Text>
						<View style={[styles.horizontalSeperator]}>
						</View>
						<Text style={[styles.text
							, styles.myFontFamily
							, styles.mediumFont
							, styles.fontWeightBold 
							]}>
							About Us
						</Text>
						<View style={[styles.horizontalSeperator]}>
						</View>
						<Text style={[styles.text
							, styles.myFontFamily
							, styles.mediumFont
							, styles.fontWeightBold 
							]}>
							News & Special offers
						</Text>
						<View style={[styles.horizontalSeperator]}>
						</View>
						<Text onPress={() => {
				          let data = {
				            profile: {
				              name: 'Charles'
				            },
				            title: 'Charles profile'
				          };
				          let route = Router.Settings();
				          this.props.navigator.push(route);
				          console.log('text pressed');
				        }}>
				          Navigate to Charles profile
		        		</Text>	
					</View>
				</ScrollView>
			</View>
		);
	}
};

let styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		width: window.width,
		height: window.height
	},
	horizontalSeperator: {
		height: 0.5,
		backgroundColor: '#b2b2b2'
	},
	fontColorWhite: {
		color: '#fff'
	},
	statusBar: {
		height: 20,
		backgroundColor: '#801A1E'
	},
	container: {
		flex: 1
	},
	text: {
		height: 44,
		flexDirection: 'row',
		paddingTop: 10,
		flex: 1,
		paddingLeft: 10,

	},
	navigationBar: {
		height: 44,
		backgroundColor: '#801A1E',
		flexDirection: 'row'
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
	myFontFamily: {
		fontFamily: 'Cochin'
	},
	navigationBarTitle: {
		alignSelf: 'center',
		left: window.width/4
	},
	paddingLeft: {
		paddingLeft: 10
	}
});

module.exports = Menu;
