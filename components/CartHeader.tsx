import { Colors } from "@/constants/Colors";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CartHeader = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleBack}>
        <Entypo name="chevron-left" size={24} color="black" />
      </Pressable>
      <Text style={styles.title}>Your Cart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "row",
    gap: 8,
    backgroundColor: Colors.White,
    alignItems: "center",
    height: 50,
    borderBottomWidth: 2,
    borderColor: Colors.BorderColor,
    width: "100%",
    borderEndEndRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CartHeader;
