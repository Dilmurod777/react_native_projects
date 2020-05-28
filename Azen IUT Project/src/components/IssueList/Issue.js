import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class Issue extends Component {
	render () {
		return (
			<TouchableOpacity style={styles.container}>
				{/* Top part */}
				<View style={styles.issueInfoHolder}>
					<Text style={[styles.issueName, styles.text]}>
						{this.props.title}
					</Text>
					<View style={styles.issueLikes}>
						<Icon
							name="thumbs-up"
							size={18}
							style={[styles.greenText, {marginRight: 2}]}
						/>
						<Text style={[styles.text, styles.greenText]}>256</Text>
					</View>
				</View>
				{/* Bottom part */}
				<View style={styles.issueAddInfoHolder}>
					<Text
						style={[styles.bottomText, styles.issueName]}>{this.props.owner.person.name_fname + " " + this.props.owner.person.name_lname}</Text>

					<View style={styles.issueLikes}>
						<Text
							style={[styles.bottomText, styles.time]}>{this.props.time}</Text>
						<Text style={styles.bottomText}>{this.props.date}</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		borderBottomWidth: 1,
		borderColor: "#BDBDBD",
		padding: 10
	},
	text: {
		fontSize: 14,
		color: "#666666"
	},
	bottomText: {
		fontSize: 12,
		color: "#666666"
	},
	issueInfoHolder: {
		flex: 1,
		flexDirection: "row",
		width: "100%"
		// backgroundColor: "red"
	},
	issueName: {
		width: "80%"
		// backgroundColor: "white"
	},
	issueLikes: {
		width: "20%",
		flexDirection: "row",
		justifyContent: "flex-end"
		// backgroundColor: "black"
	},
	greenText: {
		color: "#13DD34",
		fontWeight: "bold"
	},
	issueAddInfoHolder: {
		flexDirection: "row",
		marginTop: 30
	},
	time: {
		marginRight: 5
	}
});

export default Issue;
