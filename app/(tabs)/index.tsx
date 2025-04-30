import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Pressable,
} from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>
          Welcome to Our Store!
        </Text>
        <Link href="/(tabs)/home" asChild>
          <Pressable
            style={{ backgroundColor: "#6366f1", padding: 15, borderRadius: 8 }}
          >
            <Text style={{ color: "white" }}>Start Shopping</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
