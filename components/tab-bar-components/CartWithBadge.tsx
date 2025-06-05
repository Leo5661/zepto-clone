import { Colors } from "@/constants/Colors";
import { useCart } from "@/context/cartContext";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, View } from "react-native";

type CartWithBadgeProps = {
  color: string;
};

const CartWithBadge = ({ color }: CartWithBadgeProps) => {
  const { totalItem } = useCart();

  return (
    <View style={styles.container}>
      {totalItem > 0 ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{totalItem}</Text>
        </View>
      ) : (
        <></>
      )}
      <MaterialCommunityIcons size={24} name="cart" color={color} />
    </View>
  );
};

export default CartWithBadge;

const styles = StyleSheet.create({
  container: {
    display: "contents",
  },
  badge: {
    backgroundColor: Colors.ZeptoPrimary,
    width: 20,
    height: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1000%",
    top: 12,
    zIndex: 10,
    right: -8,
  },
  badgeText: {
    color: Colors.White,
    fontWeight: "light",
    fontSize: 12,
  },
});
