import CartHeader from "@/components/CartHeader";
import CartItem from "@/components/CartItem";
import { Colors } from "@/constants/Colors";
import { useCart } from "@/context/cartContext";
import Entypo from "@expo/vector-icons/Entypo";
import { LegendList } from "@legendapp/list";
import { Image } from "expo-image";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CartScreen() {
  const { cartItems } = useCart();
  const cartItemsList = Object.values(cartItems);

  const totalCost = cartItemsList
    .reduce((acc, cartItem) => acc + cartItem.item.price * cartItem.quantity, 0)
    .toFixed(2);

  return (
    <SafeAreaView style={styles.container}>
      <CartHeader />
      <ScrollView>
        <View style={styles.itemContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <Image
              source={
                "https://cdn.zeptonow.com/production/tr:w-100,ar-36-36,pr-true,f-auto,q-80/app/images/eta_normal_darkstore_v1.png"
              }
              contentFit="contain"
              style={styles.clockImage}
            />
            <Text style={{ fontWeight: "bold" }}>Delivery in 7 mins</Text>
          </View>
          {cartItemsList && cartItemsList.length > 0 && (
            <LegendList
              data={cartItemsList}
              renderItem={({ item }) => <CartItem item={item.item} />}
              keyExtractor={(item) => item.item.id}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
        <View style={styles.itemContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={
                "https://www.zeptonow.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fjupdt2k6txi%2Fapp%2Fimages%2Fbill_icon.png&w=828&q=75"
              }
              contentFit="contain"
              style={{ width: 30, height: 30 }}
            />
            <View style={{ flexDirection: "column", marginLeft: 20, flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>To Pay</Text>
              <Text style={{ fontSize: 12, fontWeight: "normal" }}>
                Incl. all taxes and charges
              </Text>
            </View>
            <Text
              style={{ fontSize: 16, fontWeight: "bold" }}
            >{`₹ ${totalCost}`}</Text>
            <Entypo name="chevron-right" size={20} color="black" />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={
                "https://www.zeptonow.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fjupdt2k6txi%2Fapp%2Fimages%2Finstructions_icon.png&w=828&q=75"
              }
              contentFit="contain"
              style={{ width: 30, height: 30 }}
            />
            <View style={{ flexDirection: "column", marginLeft: 20, flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Delivery Instructions
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "normal" }}>
                IDelivery partner will be notified
              </Text>
            </View>
            <Entypo name="chevron-right" size={20} color="black" />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={
                "https://www.zeptonow.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fjupdt2k6txi%2Fapp%2Fimages%2Ftip_icon.png&w=828&q=75"
              }
              contentFit="contain"
              style={{ width: 30, height: 30 }}
            />
            <View style={{ flexDirection: "column", marginLeft: 20, flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Delivery Partner Tip
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "normal" }}>
                This amount goes to your delivery partner
              </Text>
            </View>
            <Entypo name="chevron-right" size={20} color="black" />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={
                "https://www.zeptonow.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fjupdt2k6txi%2Fapp%2Fimages%2Fpartner_safety_icon.png&w=828&q=75"
              }
              contentFit="contain"
              style={{ width: 30, height: 30 }}
            />
            <View style={{ flexDirection: "column", marginLeft: 20, flex: 1 }}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold" }}
              >{`Delivery Partner's Safety`}</Text>
              <Text style={{ fontSize: 12, fontWeight: "normal" }}>
                Learn more about how we ensure their safety
              </Text>
            </View>
            <Entypo name="chevron-right" size={20} color="black" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#eff4f900",
  },

  clockImage: {
    width: 40,
    height: 40,
  },

  itemContainer: {
    flexDirection: "column",
    gap: 8,
    padding: 8,
    margin: 8,
    borderRadius: 8,
    backgroundColor: Colors.White,
  },
});
