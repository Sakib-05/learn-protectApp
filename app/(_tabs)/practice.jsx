import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PracticeScreen() {
  return (
    <View style={styles.container}>
      {/* section for favourite videos */}
      {/* all video cards are just placeholders for now */}
      <Text style={styles.text}>Favourites</Text>
      <View style={{marginBottom: 20 }}>
        <View style={styles.favouriteVideo}>
          <Ionicons
            style={{
              backgroundColor: "#9d23faff",
              padding: 5,
              borderRadius: 10,
            }}
            name="play"
            size={35}
            color="white"
          />
          <View style={{ gap: 5 }}>
            <Text style={styles.favouriteVideoText}>Video Name</Text>
            <Text style={styles.favouriteVideoText}>Video Description</Text>
          </View>
        </View>

        <View style={styles.favouriteVideo}>
          <Ionicons
            style={{
              backgroundColor: "#9d23faff",
              padding: 5,
              borderRadius: 10,
            }}
            name="play"
            size={35}
            color="white"
          />
          <View style={{ gap: 5 }}>
            <Text style={styles.favouriteVideoText}>Video Name</Text>
            <Text style={styles.favouriteVideoText}>Video Description</Text>
          </View>
        </View>
      </View>

      {/* section for downloads */}
      <Text style={styles.text}>Downloads</Text>
      <View style={styles.favouriteVideo}>
          <Ionicons
            style={{
              backgroundColor: "#9d23faff",
              padding: 5,
              borderRadius: 10,
            }}
            name="play"
            size={35}
            color="white"
          />
          <View style={{ gap: 5 }}>
            <Text style={styles.favouriteVideoText}>Video Name</Text>
            <Text style={styles.favouriteVideoText}>Video Description</Text>
          </View>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  text: { fontSize: 25, color: "#1d01d4ff", fontWeight: "bold" },
  favouriteVideo: {
    backgroundColor: "#ba70f3ff",
    flexDirection: "row",
    gap: 10,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  favouriteVideoText: {
    color: "white",
    fontSize: 20,
    backgroundColor: "#ad47faff",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
