import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import Auth from "../../components/Auth/Auth";
import LinearGradient from "react-native-linear-gradient";

class AuthScreen extends Component {
	render () {
		return (
			<LinearGradient
				start={{x: 0.0, y: 0.15}}
				end={{x: 0.85, y: 1.0}}
				colors={["#92FF81", "#00F0FF"]}
				style={styles.linearGradient}
			>
				<View style={styles.container}>
					<Auth/>
				</View>
			</LinearGradient>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1
	},
	linearGradient: {
		flex: 1,
		width: "100%"
	}
});

export default AuthScreen;
