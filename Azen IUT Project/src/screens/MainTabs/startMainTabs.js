import Icon from "react-native-vector-icons/FontAwesome";
import { Navigation } from "react-native-navigation";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("paperclip", 30, "black"),
    Icon.getImageSource("paperclip", 30)
  ]).then(sources => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              component: {
                name: "practical-guide.SharePlaceScreen",
                options: {
                  bottomTab: {
                    text: "Share Place",
                    icon: sources[0]
                  }
                }
              }
            },
            {
              component: {
                name: "practical-guide.FindPlaceScreen",
                options: {
                  bottomTab: {
                    text: "Find Place",
                    icon: sources[1]
                  }
                }
              }
            }
          ]
        }
      }
    });
  });
};

export default startTabs;
