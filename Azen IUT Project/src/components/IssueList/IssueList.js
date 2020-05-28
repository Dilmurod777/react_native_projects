import React, {Component} from "react";
import {ActivityIndicator, ScrollView, StyleSheet, View} from "react-native";
import Issue from "./Issue";

class IssueList extends Component {
	state = {
		isLoading: false,
		issues: []
	};

	componentDidMount () {
		fetch('https://azen-project.000webhostapp.com/issues/', {
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

				console.log(response);

				if (response.success) {
					this.setState({
						...this.state,
						issues: response.issues
					})
				}
			});
	}

	render () {
		if (this.state.isLoading) {
			return (
				<View style={{flex: 1, padding: 20}}>
					<ActivityIndicator/>
				</View>
			)
		}

		return (
			<ScrollView style={styles.filterHolder}>
				{this.state.issues.map((issue, id) => (
					<Issue key={id} title={issue.title} date={issue.date} time={issue.time} owner={issue.owner}/>
				))}
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	filterHolder: {
		marginBottom: 120
	}
});

export default IssueList;
