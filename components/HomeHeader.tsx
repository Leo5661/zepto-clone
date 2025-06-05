import { Colors } from "@/constants/Colors";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.addressContainer}>
        <Image
          source={require("../assets/images/user.png")}
          width={50}
          height={50}
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.addressHeaderText}>Delivery in 6 Mins</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.addressText}>
              Pocket D, Uttam Nagar, Bindapur, New Delhi
            </Text>
            <Entypo name="chevron-small-down" size={24} color="white" />
          </View>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Feather name="search" size={24} color="black" />
        <TextInput placeholder={`Search "amul butter"`} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 8,
    backgroundColor: Colors.ZeptoHeaderBackground,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  addressHeaderText: {
    color: Colors.White,
    fontSize: 18,
    fontWeight: "bold",
  },
  addressText: {
    color: Colors.White,
    fontSize: 14,
    fontWeight: "light",
  },
  searchContainer: {
    marginTop: 6,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: Colors.White,
    marginBottom: 8,
  },
});

export default HomeHeader;
