import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import pizza from "../common/images/uthappizza.png";
import { DISHES } from '../common/dishes'

const styles = StyleSheet.create({
  imgAva: {
    width: "100%",
    height: 250,
  },
});

export const DishDetail = () => {
    const { dishId } = this.props.route.params

    const dish = DISHES[+dishId]
    if (dish != null) {
      return (
        <Card>
          <View>
            <Card.Title>{dish.name}</Card.Title>
            <Image resizeMode="cover" source={pizza} style={styles.imgAva} />
          </View>
          <Text style={{ margin: 10 }}>{dish.description}</Text>
        </Card>
      );
    } else {
      return <View />;
    }
}
