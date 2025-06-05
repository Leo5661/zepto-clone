import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const EstimateTime = () => {
  return (
    <View style={styles.container}>
      <Image
        source={
          "https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.77.1/images/clock.svg"
        }
        style={styles.image}
      />
      <Text style={styles.text}>8 Mins</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    width: 65,
    backgroundColor: Colors.ZeptoShade,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  image: {
    width: 10,
    height: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: "thin",
    color: Colors.SecondaryColor,
  },
});

export default EstimateTime;
