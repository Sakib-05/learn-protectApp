import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router'; //Import the useRouter hook

export default function HomeScreen() {
  const router = useRouter(); //Get the router object

  return (
    <View style={styles.container}>
      {/* paths that be chosen by the user */}
      <Text style={styles.pathsTitle}>Select path</Text>
      <View style={styles.pathOptions}>
        
        {/* button to go to the learn screen */}
        <TouchableOpacity onPress={() => router.push('/learn')}>
          <View style={styles.path}>
            <Ionicons name="book" size={35} color="white" />
            <Text style={styles.pathText}>Learn</Text>
          </View>
        </TouchableOpacity>

        {/* button to go to the protect screen */}
        <TouchableOpacity onPress={() => router.push('/protect')}>
          <View style={styles.path}>
            <Ionicons name="shield" size={35} color="white" />
            <Text style={styles.pathText}>Protect</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* placeholder for the course */}
      <Text style={styles.title}>Continue course</Text>
      <TouchableOpacity>
        <View style={styles.courseStyle}>
          <Ionicons name="play" size={35} color="white" />
          <Text style={{ fontSize: 20, color: "white" }}>2min</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  pathOptions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },
  path: {
    backgroundColor: "#5035ffff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 150,
  },
  pathText: { color: "white", fontSize: 30 },
  pathsTitle: {
    fontSize: 30,
    marginTop: 15,
    color: "#1d01d4ff",
    marginLeft: 20,
  },
  title: { fontSize: 30, marginTop: 20, color: "#1d01d4ff", marginLeft: 10 },
  courseStyle: {
    backgroundColor: "#6b54feff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
    height: 150,
    marginTop: 20,
  },
});