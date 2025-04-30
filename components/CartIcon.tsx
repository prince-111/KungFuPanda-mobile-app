import { View, Text } from "react-native";
import { ShoppingCart } from "lucide-react-native";
import { styles } from "../constants/styles";

interface CartIconProps {
  count: number;
  color: string;
  size?: number;
}

export default function CartIcon({ count, color, size = 24 }: CartIconProps) {
  return (
    <View style={{ position: "relative" }}>
      <ShoppingCart color={color} size={size} />

      {count > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{count > 9 ? "9+" : count}</Text>
        </View>
      )}
    </View>
  );
}
