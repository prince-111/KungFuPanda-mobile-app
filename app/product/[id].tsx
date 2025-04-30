import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { products } from "../../constants/products";
import { useCart } from "../cart-context";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const { addToCart, cartItems } = useCart();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Product not found</Text>
      </View>
    );
  }

  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <ScrollView>
      <View style={{ padding: 16 }}>
        <Image
          source={{ uri: product.image }}
          style={{ width: "100%", height: 300, borderRadius: 8 }}
        />

        <View style={{ marginTop: 16 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {product.name}
            </Text>
            <View
              style={[
                styles.badge,
                { backgroundColor: product.rating > 4 ? "#4CAF50" : "#FFC107" },
              ]}
            >
              <Text style={{ color: "white" }}>{product.rating} ★</Text>
            </View>
          </View>

          <Text style={{ fontSize: 20, color: "#6366f1", marginTop: 8 }}>
            ₹{product.price.toFixed(2)}
          </Text>

          <Text style={{ marginTop: 8 }}>{product.description}</Text>

          <Text style={{ fontWeight: "bold", marginTop: 16 }}>
            Available Colors:
          </Text>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            {product.colors.map(color => (
              <View
                key={color}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: color,
                  marginRight: 8,
                  borderWidth: 1,
                  borderColor: "#e0e0e0",
                }}
              />
            ))}
          </View>

          <View style={{ flexDirection: "row", marginTop: 24 }}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  flex: 1,
                  backgroundColor: "#6366f1",
                  opacity: isInCart ? 0.6 : 1,
                },
              ]}
              onPress={() => addToCart(product)}
              disabled={isInCart}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {isInCart ? "Added to Cart" : "Add to Cart"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                { flex: 1, marginLeft: 16, backgroundColor: "#e0e0e0" },
              ]}
            >
              <Text style={{ fontWeight: "bold" }}>Buy Now</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Product Details
            </Text>
            <Text style={{ marginTop: 8 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
});
