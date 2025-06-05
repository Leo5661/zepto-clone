import HomeHeader from "@/components/HomeHeader";
import ItemCard from "@/components/ItemCard";
import { Colors } from "@/constants/Colors";
import { Item } from "@/types/Item";
import { LegendList } from "@legendapp/list";
import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [itemList, setItemList] = useState<Item[] | null>(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const itemListResponse = await axios.get(
      "https://fakestoreapi.com/products",
    );
    setItemList(itemListResponse.data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      {itemList && itemList.length > 0 && (
        <LegendList
          data={itemList}
          renderItem={({ item }) => <ItemCard item={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          recycleItems
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
});
