import React, {Component} from "react";
import {ActivityIndicator, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import logoImage from "../../../images/logo.png";
import {Navigation} from "react-native-navigation";
import MainTabs from '../MainTabs/MainTabs'

class Reg extends Component {
	state = {
		logo: logoImage,
		firstName: 'Admin',
		lastName: 'Admin',
		username: 'Admin',
		phone: '+998915397989',
		SSN: '12345',
		password: 'Admin123',
		isLoading: false
	};

	onFirstNameEnteredHandler = (value) => {
		this.setState({
			...this.state,
			firstName: value
		})
	};

	onLastNameEnteredHandler = (value) => {
		this.setState({
			...this.state,
			lastName: value
		})
	};

	onUsernameEnteredHandler = (value) => {
		this.setState({
			...this.state,
			username: value
		})
	};

	onPhoneEnteredHandler = (value) => {
		this.setState({
			...this.state,
			phone: value
		})
	};

	onSSNEnteredHandler = (value) => {
		this.setState({
			...this.state,
			SSN: value
		})
	};

	onPasswordEnteredHandler = (value) => {
		this.setState({
			...this.state,
			password: value
		})
	};

	signIn = () => {
		Navigation.pop('azen.RegScreen');
	};

	register = () => {
		this.setState({
			...this.state,
			isLoading: true
		});

		fetch("https://azen-project.000webhostapp.com/_token", {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then((response) => response.json())
			.then((response) => {
				this.setState({
					...this.state,
					_token: response._token
				});

				let url = "https://azen-project.000webhostapp.com/register/";
				url += this.state.firstName + "/";
				url += this.state.lastName + "/";
				url += this.state.username + "/";
				url += this.state.phone + "/";
				url += this.state.SSN + "/";
				url += this.state.password;

				fetch(url, {
					method: 'GET',
					credentials: 'same-origin',
					mode: 'same-origin',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},
				})
					.then((response) => response.json())
					.then((response) => {
						this.setState({
							...this.state,
							isLoading: false
						});

						console.log(response)

						if (response.success) {
							let person = {
								'person_id': response.person_id,
								'person_SSN': response.person_SSN
							};

							MainTabs(person);
						}
					})
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
								<TextInput style={styles.input} placeholder={"First Name"}
								           onChangeText={this.onFirstNameEnteredHandler}/>
								<TextInput style={styles.input} placeholder={"Last Name"}
								           onChangeText={this.onLastNameEnteredHandler}/>
								<TextInput style={styles.input} placeholder={"Username"}
								           onChangeText={this.onUsernameEnteredHandler}/>
								<TextInput style={styles.input} placeholder={"Phone number"}
								           onChangeText={this.onPhoneEnteredHandler}/>
								<TextInput style={styles.input} placeholder={"SSN"}
								           onChangeText={this.onSSNEnteredHandler}/>
								<TextInput
									style={styles.input}
									secureTextEntry={true}
									placeholder={"Password"}
									onChangeText={this.onPasswordEnteredHandler}
								/>

								<TouchableOpacity onPress={this.register}>
									<View style={styles.btnSign}>
										<Text style={styles.textSign}>Register</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.signIn}>
									<View style={styles.btnSign}>
										<Text style={styles.textSign}>Sign in</Text>
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
		flex: 1
	},
	imageHolder: {
		flex: 1,
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	image: {
		marginTop: 10,
		resizeMode: "contain",
		width: "100%",
		height: "100%"
	},
	scrollContainer: {
		flex: 2
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

export default Reg;
