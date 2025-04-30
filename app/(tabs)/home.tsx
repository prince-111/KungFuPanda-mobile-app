import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import { useCart } from "../cart-context";
import { useRouter } from "expo-router";
import { products } from "../../constants/products";

// Get screen width for responsive layout
const { width } = Dimensions.get("window");
const itemMargin = 8;
const itemWidth = (width - 32 - itemMargin) / 2; // 32 = total horizontal padding

const categories = [
  // { id: 3, name: "Home", icon: "🏠" },
  { id: 1, name: "Electronics", icon: "📱" },
  { id: 2, name: "Fashion", icon: "👕" },
  { id: 4, name: "Beauty", icon: "💄" },
  { id: 5, name: "Sports", icon: "⚽" },
  { id: 6, name: "Toys", icon: "🧸" },
];

const bestsellers = products.filter(p => p.rating >= 4.5); // Filter high-rated products

export default function HomeScreen() {
  const { addToCart } = useCart();
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Category Circles */}
      {/* <Text style={styles.sectionTitle}>Shop by Category</Text> */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryItem}
            onPress={() => router.push(`/category/${category.id}`)}
          >
            <View style={styles.categoryCircle}>
              <Text style={styles.categoryIcon}>{category.icon}</Text>
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Promo Banner */}
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://m.media-amazon.com/images/G/31/IMG23/TVs/nikita/MSO/2_asinssamsung_banner_1500x450_PC_2.jpg",
          }}
          style={styles.bannerImage}
        />
      </View>

      {/* Bestseller Products */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Bestsellers</Text>
        <TouchableOpacity onPress={() => router.push("/bestsellers")}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={bestsellers}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.bestsellerCardWrapper,
              // Add left margin to all items except the first one
              // index !== 0 && { marginLeft: 16 },
            ]}
          >
            <ProductCard
              product={item}
              width={itemWidth * 1.3}
              onPress={() => router.push(`/product/${item.id}`)}
              onAddToCart={() => addToCart(item)}
            />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.bestsellerContainer}
      />

      {/* All Products Grid */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>All Products</Text>
        <TouchableOpacity onPress={() => router.push("/products")}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.productsGrid}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            width={itemWidth}
            onPress={() => router.push(`/product/${product.id}`)}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

// Updated ProductCard component (add this to your components folder)
const ProductCard = ({ product, width, onPress, onAddToCart }) => (
  <TouchableOpacity style={[styles.productCard, { width }]} onPress={onPress}>
    <Image source={{ uri: product.image }} style={styles.productImage} />
    <View style={styles.productDetails}>
      <Text style={styles.productName} numberOfLines={1}>
        {product.name}
      </Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>★ {product.rating}</Text>
        <Text style={styles.reviews}>({product.reviews})</Text>
      </View>
      <Text style={styles.productPrice}>₹{product.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCart}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2c3e50",
  },
  seeAll: {
    color: "#6366f1",
    fontWeight: "600",
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 20,
  },
  categoryCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryIcon: {
    fontSize: 30,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: "500",
    color: "#4b5563",
  },
  bannerContainer: {
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
  },
  bannerImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  bestsellerContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  bestsellerCardWrapper: {
    // This wrapper ensures consistent spacing
    marginRight: 16, // Space between items
  },
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  productCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  productDetails: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    color: "#1f2937",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  rating: {
    fontSize: 12,
    color: "#f59e0b",
    marginRight: 4,
  },
  reviews: {
    fontSize: 12,
    color: "#6b7280",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#6366f1",
    marginBottom: 8,
  },
  addToCartButton: {
    backgroundColor: "#6366f1",
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  addToCartText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 14,
  },
});
