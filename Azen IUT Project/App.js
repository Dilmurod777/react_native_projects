import {Navigation} from "react-native-navigation";
import AuthScreen from "./src/screens/Auth/Auth.screen";
import RegScreen from "./src/screens/Reg/Reg.screen";
import IssueListScreen from "./src/screens/IssueList/IssueList.screen";
import IssueScreen from "./src/screens/Issue/Issue.screen";
import AddIssueScreen from "./src/screens/AddIssue/AddIssue.screen";
import ProfileScreen from "./src/screens/Profile/Profile.screen";

Navigation.registerComponent("azen.AuthScreen", () => AuthScreen);
Navigation.registerComponent("azen.RegScreen", () => RegScreen);
Navigation.registerComponent("azen.IssueListScreen", () => IssueListScreen);
Navigation.registerComponent("azen.IssueScreen", () => IssueScreen);
Navigation.registerComponent("azen.AddIssueScreen", () => AddIssueScreen);
Navigation.registerComponent("azen.ProfileScreen", () => ProfileScreen);

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			stack: {
				children: [
					{
						component: {
							id: 'azen.RegScreen',
							name: "azen.RegScreen",
							options: {
								topBar: {
									visible: false,
									text: 'Register Page'
								}
							}
						}
					},
					{
						component: {
							id: 'azen.AuthScreen',
							name: "azen.AuthScreen",
							options: {
								topBar: {
									visible: false,
									text: 'Login Page'
								}
							}
						}
					}
				]
			}
		}
	});
});
