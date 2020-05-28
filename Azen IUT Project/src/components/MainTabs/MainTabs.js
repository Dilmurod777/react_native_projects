import Icon from "react-native-vector-icons/FontAwesome5";
import {Navigation} from "react-native-navigation";

const mainTabs = (person) =>{
	Promise.all([
		Icon.getImageSource('globe', 30, 'black'),
		Icon.getImageSource('plus-circle', 30, 'black'),
		Icon.getImageSource('user-circle', 30, 'black')
	]).then(sources => {
		Navigation.setRoot({
			root: {
				bottomTabs: {
					children: [
						{
							component: {
								id: "azen.IssueListScreen",
								name: "azen.IssueListScreen",
								options: {
									bottomTab: {
										text: "Issues",
										icon: sources[0]
									}
								}
							},
						},
						{
							component: {
								id: "azen.AddIssueScreen",
								name: "azen.AddIssueScreen",
								options: {
									bottomTab: {
										text: "Add Issue",
										icon: sources[1]
									}
								}
							},
						},
						{
							component: {
								id: "azen.ProfileScreen",
								name: "azen.ProfileScreen",
								options: {
									bottomTab: {
										text: "Profile",
										icon: sources[2]
									}
								}
							},
						},
					],
				},
			}
		});
	});
};

export default mainTabs;