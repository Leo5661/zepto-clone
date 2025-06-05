import CartWithBadge from '@/components/tab-bar-components/CartWithBadge';
import { Colors } from '@/constants/Colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.ZeptoPrimary,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Zepto',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home-filled" color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          headerShown: false,
          tabBarStyle: {display: "none"},
          tabBarIcon: ({ color }) => <CartWithBadge color={color} />,
        }}
      />
    </Tabs>
  );
}
