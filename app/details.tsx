import AddOrRemoveButton from "@/components/AddOrRemoveButton";
import { Colors } from "@/constants/Colors";
import { useCart } from "@/context/cartContext";
import { Item } from "@/types/Item";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import axios from "axios";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailsScreen() {
  const [itemDetails, setItemDetails] = useState<Item | null>(null);
  const router = useRouter();
  const { totalItem } = useCart();
  const { id } = useLocalSearchParams();

  useEffect(() => {
    fetchItems();
  }, [id]);

  const fetchItems = async () => {
    const itemListResponse = await axios.get(
      `https://fakestoreapi.com/products/${id}`,
    );
    setItemDetails(itemListResponse.data);
  };

  const handleClose = () => {
    router.back();
  };

  const handleViewCart = () => {
    router.push("/cart");
  };
  return (
    <SafeAreaView style={styles.transparentContainer}>
      <Pressable
        style={{ backgroundColor: "gray", padding: 6, borderRadius: 5000 }}
        onPress={handleClose}
      >
        <Fontisto name="close" size={20} color="white" />
      </Pressable>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={itemDetails?.image}
            contentFit="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text numberOfLines={1} style={styles.itemName}>
            {itemDetails?.title}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text numberOfLines={1} style={styles.quantity}>
              Net Qty: 1 pc
            </Text>
            <View style={styles.rating}>
              <AntDesign name="star" size={14} color="white" />
              <Text style={{ color: Colors.White }}>4.3</Text>
            </View>
            <Text numberOfLines={1} style={styles.quantity}>
              (1047)
            </Text>
          </View>
          <Text
            numberOfLines={1}
            style={styles.price}
          >{`₹ ${itemDetails?.price}`}</Text>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{itemDetails?.description}</Text>
        </View>
        <View style={styles.bottomButtonContainer}>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.viewCartButton} onPress={handleViewCart}>
              {totalItem > 0 ? (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{totalItem}</Text>
                </View>
              ) : (
                <></>
              )}
              <MaterialCommunityIcons size={24} name="cart" color={"gray"} />
              <Text style={{ marginLeft: 8 }}>View cart</Text>
            </Pressable>
          </View>
          {itemDetails && (
            <View style={styles.buttonContainer}>
              <AddOrRemoveButton item={itemDetails} />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  transparentContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#5c5c5c9b",
  },
  container: {
    padding: 8,
    width: "100%",
    marginTop: 6,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    borderWidth: 1,
    borderColor: Colors.BorderColor,
    backgroundColor: Colors.White,
  },
  imageContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "60%",
    height: 200,
  },
  detailsContainer: {
    marginTop: 8,
    flexDirection: "column",
    paddingHorizontal: 6,
    gap: 6,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "medium",
  },
  quantity: {
    fontSize: 14,
    fontWeight: "normal",
  },
  rating: {
    marginHorizontal: 6,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 8,
    backgroundColor: Colors.ZeptoGreen,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  descriptionTitle: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: "normal",
  },
  bottomButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "flex-end",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewCartButton: {
    borderRadius: 8,
    paddingVertical: 8,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: Colors.BorderColor,
  },
  badge: {
    backgroundColor: Colors.ZeptoPrimary,
    width: 20,
    height: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1000%",
    top: -10,
    zIndex: 10,
    right: -30,
  },
  badgeText: {
    color: Colors.White,
    fontWeight: "light",
    fontSize: 12,
  },
});
