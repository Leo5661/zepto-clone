import { Colors } from '@/constants/Colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View } from "react-native";

type CartWithBadgeProps = {
    color: string
}

const CartWithBadge = ({color}: CartWithBadgeProps) => {
    return(
        <View style={styles.container}>
            <View style={styles.badge}>
                <Text style={styles.badgeText}>3</Text>
            </View>
            <MaterialCommunityIcons size={24} name="cart" color={color} />
        </View>
    )
}

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
        right: -8
    },
    badgeText: {
        color: Colors.White,
        fontWeight: "light",
        fontSize: 12
    }

})