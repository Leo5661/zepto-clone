import { Colors } from "@/constants/Colors";
import { Item } from "@/types/Item";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AddOrRemoveButton from "./AddOrRemoveButton";
import EstimateTime from "./EstimateTime";

type ItemCardProps = {
  item: Item;
};

const ItemCard = ({ item }: ItemCardProps) => {
  const router = useRouter();

  const handleShowDetails = () => {
    router.push({
      pathname: "/details",
      params: { id: item.id },
    });
  };

  return (
    <Pressable onPress={handleShowDetails} style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} contentFit="contain" style={styles.image} />
      </View>
      <View style={{ paddingHorizontal: 8, gap: 6 }}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            flex: 1,
          }}
        >
          <Text style={styles.price}>{`₹ ${item.price}`}</Text>
          <AddOrRemoveButton item={item} />
        </View>
        <Text style={styles.quantity}>1 pc</Text>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <EstimateTime />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "column",
    gap: 4,
    margin: 4,
  },
  imageContainer: {
    borderRadius: 8,
    flexDirection: "row",
    backgroundColor: Colors.White,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: Colors.BorderColor,
    padding: 6,
  },
  image: {
    width: "80%",
    height: 120,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 12,
    fontWeight: "ultralight",
  },
  title: {
    fontSize: 16,
    fontWeight: "normal",
  },
});

export default ItemCard;
