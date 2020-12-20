import React from "react";
import { StyleSheet, FlatList, Image } from "react-native";
import { ListItem } from "react-native-elements";

import { DISHES } from "../common/dishes";

import pizza from "../common/images/uthappizza.png";
import { PAGE_NAME } from "../common/navigationConst";

const styles = StyleSheet.create({
  imgAva: {
    width: 34,
    height: 34,
    borderRadius: 50,
  },
});

export class Menu extends React.Component {
  state = {
    dishes: DISHES,
  };

  onPress = (id) => () => {
    const { navigate } = this.props.navigation;
    navigate(PAGE_NAME.DISH_DETAIL, { dishId: id });
  };

  renderMenuItem = ({ item, index }) => {
    return (
      <ListItem
        key={index}
        bottomDivider
        hideChevron={true}
        onPress={this.onPress(item.id)}
      >
        <Image source={pizza} style={styles.imgAva} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  render() {
    const { dishes } = this.state;

    return (
      <FlatList
        data={dishes}
        renderItem={this.renderMenuItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}
