import React, {Component} from "react";
import {ActivityIndicator, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import logoImage from "../../../images/logo.png";
import {Navigation} from "react-native-navigation";
import MainTabs from '../MainTabs/MainTabs'

class Auth extends Component {
	state = {
		logo: logoImage,
		username: 'Admin',
		password: 'Admin123',
		isLoading: false,
	};

	signIn = () => {
		this.setState({
			...this.state,
			isLoading: true
		});

		fetch('https://azen-project.000webhostapp.com/login/' + this.state.username + '/' + this.state.password, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			}
		})
			.then(response => response.json())
			.then(response => {
				this.setState({
					...this.state,
					isLoading: false
				});

				if (response.success) {
					let person = {
						'person_id': response.person_id,
						'person_SSN': response.person_SSN
					};

					MainTabs(person);
				} else {
					this.register();
				}
			});
	};

	register = () => {
		Navigation.push("azen.AuthScreen", {
			component: {
				id: "azen.RegScreen",
				name: "azen.RegScreen",
				options: {
					topBar: {
						visible: true,
						backButton: {
							visible: false
						}
					}
				}
			}
		})
	};

	usernameEnterHandler = (username) => {
		this.setState({
			...this.state,
			username: username
		})
	};

	passwordEnterHandler = (password) => {
		this.setState({
			...this.state,
			password: password
		})
	};

	render () {
		if (this.state.isLoading) {
			return (
				<View style={{flex: 1, padding: 20}}>
					<ActivityIndicator/>
				</View>
			)
		}

		return (
			<View style={styles.container}>
				<View style={styles.imageHolder}>
					<Image source={this.state.logo} style={styles.image}/>
				</View>
				<View style={styles.scrollContainer}>
					<ScrollView>
						<View style={styles.formContainer}>
							<View style={styles.formHolder}>
								<TextInput
									style={styles.input}
									placeholder={"Username"}
									onChangeText={this.usernameEnterHandler}
								/>
								<TextInput
									style={[styles.input]}
									secureTextEntry={true}
									placeholder={"Password"}
									onChangeText={this.passwordEnterHandler}
								/>
								<TouchableOpacity onPress={this.signIn}>
									<View style={styles.btnSign}>
										<Text style={styles.textSign}>Sign in</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity>
									<View style={styles.btnForgot}>
										<Text style={styles.textForgot}>Forgot password?</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.register}>
									<View style={styles.btnSign}>
										<Text style={styles.textSign}>Register</Text>
									</View>
								</TouchableOpacity>
							</View>
						</View>
					</ScrollView>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
	},
	imageHolder: {
		flex: 1,
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	image: {
		marginTop: 50,
		resizeMode: "contain",
		width: "100%",
		height: "100%"
	},
	scrollContainer: {
		flex: 1.2,
		paddingTop: 20
	},
	formContainer: {
		flex: 1,
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-end",
		paddingBottom: 20
	},
	formHolder: {
		width: "60%"
	},
	input: {
		marginTop: 5,
		padding: 5,
		borderBottomWidth: 0.5,
		borderBottomColor: "#398A82",
		color: "#666666"
	},
	btnSign: {
		margin: 0,
		backgroundColor: "#FFC44F",
		width: "100%",
		borderRadius: 7,
		padding: 10,
		marginTop: 20
	},
	textSign: {
		textAlign: "center",
		color: "white",
		fontSize: 16
	},
	btnForgot: {
		marginTop: 20
	},
	textForgot: {
		color: "#FF4F4F",
		textAlign: "center"
	}
});

export default Auth;
