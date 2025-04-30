import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Product } from "../constants/products";

interface ProductCardProps {
  product: Product;
  onPress: () => void;
  onAddToCart: () => void;
}

export const ProductCard = ({
  product,
  onPress,
  onAddToCart,
}: ProductCardProps) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>₹{product.price.toFixed(2)}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{product.rating} ★</Text>
            <Text style={styles.reviews}>({product.reviews} reviews)</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onAddToCart} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 16,
    margin: 8,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  details: {
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    color: "#ff9500",
    marginRight: 8,
  },
  reviews: {
    color: "#999",
    fontSize: 12,
  },
  addButton: {
    backgroundColor: "#6366f1",
    padding: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
