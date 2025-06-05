import { Colors } from "@/constants/Colors";
import { useCart } from "@/context/cartContext";
import { Item } from "@/types/Item";
import Entypo from "@expo/vector-icons/Entypo";
import { Pressable, StyleSheet, Text, View } from "react-native";

type AddOrRemoveButtonProps = {
  item: Item;
  size?: "full";
};

const AddOrRemoveButton = ({ item, size }: AddOrRemoveButtonProps) => {
  const { cartItems, addItemToCart, removeItemFromCart } = useCart();
  const cartItemList = Object.values(cartItems);
  const itemTotalQuantityInCart = cartItemList.find(
    (cartItem) => cartItem.item.id === item.id,
  )?.quantity;
  const buttonSize = size === "full" ? "100%" : 100;

  const handleAddItemToCart = () => {
    addItemToCart(item);
  };

  const handleRemoveItemFromCart = () => {
    removeItemFromCart(item);
  };

  return (
    <View style={styles.container}>
      {itemTotalQuantityInCart && itemTotalQuantityInCart > 0 ? (
        <View style={styles.addOrRemoveContainer}>
          <Pressable onPress={handleRemoveItemFromCart}>
            <Entypo name="minus" size={24} color={Colors.White} />
          </Pressable>
          <Text style={{ color: Colors.White, fontWeight: "bold" }}>
            {itemTotalQuantityInCart}
          </Text>
          <Pressable onPress={handleAddItemToCart}>
            <Entypo name="plus" size={24} color={Colors.White} />
          </Pressable>
        </View>
      ) : (
        <Pressable onPress={handleAddItemToCart} style={styles.addText}>
          <Text style={{ color: Colors.ZeptoRed }}>Add</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fac8d681",
    width: 100,
    borderWidth: 1,
    borderColor: Colors.ZeptoRed,
    borderRadius: 8,
  },
  addOrRemoveContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: Colors.ZeptoRed,
    borderRadius: 8,
    width: "100%",
    paddingVertical: 4,
    paddingHorizontal: 6,
    alignItems: "center",
    gap: 8,
  },
  addText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 7,
    paddingHorizontal: 28,
  },
});

export default AddOrRemoveButton;
