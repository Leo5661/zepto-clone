import { Colors } from "@/constants/Colors";
import { Item } from "@/types/Item";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import AddOrRemoveButton from "./AddOrRemoveButton";

type CartItemProps = {
  item: Item;
};

const CartItem = ({ item }: CartItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} contentFit="contain" style={styles.image} />
      <View style={{ flexDirection: "column", flex: 1, maxWidth: 120 }}>
        <Text numberOfLines={1}>{item.title}</Text>
        <Text numberOfLines={1}>1 pc</Text>
      </View>
      <AddOrRemoveButton item={item} />
      <Text style={styles.price}>{`₹ ${item.price}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 6,
    gap: 8,
    alignItems: "center",
    paddingHorizontal: 8,
  },
  image: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.BorderColor,
    padding: 8,
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 16,
    fontWeight: "normal",
    paddingHorizontal: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 10,
    fontWeight: "light",
  },
});

export default CartItem;
