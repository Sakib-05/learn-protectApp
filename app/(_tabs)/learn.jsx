import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// This is the main component for the "Learn & Protect" screen.
export default function LearnScreen() {
  return (
    // We use a ScrollView to ensure the content can scroll if it overflows the screen height.
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Video Library Section */}
        <Text style={styles.sectionTitle}>Video Library</Text>
        <View style={styles.categoryGrid}>
          {/* We'll create a reusable component for these buttons later, but for the prototype, this is clear and simple. */}

          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Escapes</Text>
            <Ionicons name="play-circle-outline" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Strikes</Text>
            <Ionicons name="play-circle-outline" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Awareness</Text>
            <Ionicons name="play-circle-outline" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Situations</Text>
            <Ionicons name="play-circle-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Starter Course Section */}
        <Text style={styles.sectionTitle}>Starter Course</Text>
        <TouchableOpacity style={styles.courseCard}>
          <View style={styles.playIconContainer}>
            <Ionicons name="play" size={32} color="#6A5ACD" />
          </View>
          <View style={styles.courseTextContainer}>
            {/* These are placeholder views to mimic the lines of text in the screenshot */}
            <View style={[styles.placeholderLine, { width: "80%" }]} />
            <View style={[styles.placeholderLine, { width: "50%" }]} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// All the styles for this screen are defined here.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F8", // A very light purple background
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: "#836FFF", // A slightly lighter purple
    padding: 20,
    borderRadius: 10,
    width: "48%", // Creates a 2x2 grid with a small gap
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryText: {
    color: "white",
    fontSize: 16,
    fontWeight: "00",
    marginBottom: 8,
  },
  courseCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    // Adding a subtle shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  playIconContainer: {
    backgroundColor: "#E6E6FA", // Very light purple for the icon background
    borderRadius: 50,
    padding: 10,
    marginRight: 15,
  },
  courseTextContainer: {
    flex: 1,
  },
  placeholderLine: {
    backgroundColor: "#E0E0E0",
    height: 10,
    borderRadius: 5,
    marginBottom: 8,
  },
});
