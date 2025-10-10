import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProtectScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* the following buttons are placeholders for security features */}
        {/* SOS button */}
        <TouchableOpacity>
          <View style={styles.soscontainer}>
            <Text style={styles.sosMessage}>SOS</Text>
          </View>
        </TouchableOpacity>

        {/* security options */}
        <View style={styles.securityoptions}>

          {/* live location */}
          <TouchableOpacity>
            <View style={styles.singlesecurtyoption}>
              <Ionicons name="location" size={35} color="white" />
              <Text style={styles.securityoption_text}>Live Location</Text>
            </View>
          </TouchableOpacity>

          {/* fake call*/}
          <TouchableOpacity>
            <View style={styles.singlesecurtyoption}>
              <Ionicons name="call" size={35} color="white" />
              <Text style={styles.securityoption_text}>Fake call</Text>
            </View>
          </TouchableOpacity>

          {/* siren */}
          <TouchableOpacity>
            <View style={styles.singlesecurtyoption}>
              <Ionicons name="volume-high" size={35} color="white" />
              <Text style={styles.securityoption_text}>Siren</Text>
            </View>
          </TouchableOpacity>

          {/* check-in */}
          <TouchableOpacity>
            <View style={styles.singlesecurtyoption}>
              <Ionicons name="checkbox" size={35} color="white" />
              <Text style={styles.securityoption_text}>Check-in</Text>
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {justifyContent: "center", alignItems: "center" },
  soscontainer: {
    backgroundColor: "#836FFF",
    width: 350,
    height: 200,
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  sosMessage: {
    color: "white",
    backgroundColor: "red",
    fontSize: 40,
    padding: 50,
    borderRadius: 300,
  },
  securityoptions: {
    flexDirection: "column",
    gap:20,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  singlesecurtyoption: {
    backgroundColor: "#836FFF",
    width: 300,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap:10,
  },
  securityoption_text: {
    color: "white",
    fontSize: 30,
  },
});
