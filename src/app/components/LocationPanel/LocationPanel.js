import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import Level from "./Level";

const LocationPanel = (props) => {
  const fullPath = props.path;
  const tokens = fullPath.split(/[\/\\]+/g);
  const levels = tokens.filter((token) => token);
  let elements = [];
  let index = 0;
  for (const level of levels) {
    elements.push(
      <Text key={"slash-" + index} style={styles.element}>
        /
      </Text>
    );
    elements.push(<Level key={"level-" + index} name={level}></Level>);
    index += 1;
  }

  return <View style={styles.container}>{elements}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    borderColor: "#e0e0e0",
    borderWidth: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  element: {
    marginLeft: 2,
    marginRight: 2,
  },
});

export default LocationPanel;
