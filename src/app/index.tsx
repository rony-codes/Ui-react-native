import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 20,
      }}
    >
      {/* Header */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          textAlign: "center",
          marginTop: 8,
        }}
      >
        index
      </Text>

      {/* Hero Section */}
      <View
        style={{
          alignItems: "center",
          marginTop: 25,
        }}
      >
        {/* Original Logo */}
        <Text
          style={{
            fontSize: 50,
            color: "#59d62f",
          }}
        >
          ✚
        </Text>

        {/* Title */}
        <Text
          style={{
            fontSize: 34,
            fontWeight: "bold",
            marginTop: 4,
            color: "#111",
          }}
        >
          Sign In
        </Text>

        {/* Subtitle */}
        <Text
          style={{
            color: "#666",
            marginTop: 6,
            fontSize: 14,
          }}
        >
          Let's experience the joy of telecare AI
        </Text>
      </View>

      {/* Form */}
      <View
        style={{
          marginTop: 28,
        }}
      >
        {/* Email */}
        <Text
          style={{
            fontWeight: "600",
            marginBottom: 6,
            color: "#333",
            marginLeft: 4,
          }}
        >
          Email Address
        </Text>

        <TextInput
          placeholder="Enter your email..."
          placeholderTextColor="#999"
          style={{
            borderWidth: 1,
            borderColor: "#bbb",
            height: 52,
            borderRadius: 14,
            paddingHorizontal: 15,
            backgroundColor: "white",
          }}
        />

        {/* Password */}
        <Text
          style={{
            fontWeight: "600",
            marginBottom: 6,
            marginTop: 16,
            color: "#333",
            marginLeft: 4,
          }}
        >
          Password
        </Text>

        <TextInput
          placeholder="Enter your password..."
          placeholderTextColor="#999"
          secureTextEntry
          style={{
            borderWidth: 1,
            borderColor: "#bbb",
            height: 52,
            borderRadius: 14,
            paddingHorizontal: 15,
            backgroundColor: "white",
          }}
        />

        {/* Button */}
        <TouchableOpacity
          style={{
            backgroundColor: "#59d62f",
            height: 52,
            borderRadius: 14,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Sign In ➜
          </Text>
        </TouchableOpacity>
      </View>

      {/* Social Icons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 28,
          gap: 14,
        }}
      >
        <TouchableOpacity
          style={{
            width: 55,
            height: 55,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: "#ddd",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name="facebook" size={22} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 55,
            height: 55,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: "#ddd",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name="google" size={22} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 55,
            height: 55,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: "#ddd",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name="instagram" size={22} color="black" />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View
        style={{
          alignItems: "center",
          marginTop: 18,
        }}
      >
        <Text
          style={{
            color: "#444",
            fontSize: 13,
          }}
        >
          Don't have an account?{" "}
          <Text
            style={{
              color: "#59d62f",
              fontWeight: "600",
            }}
          >
            Sign Up
          </Text>
        </Text>

        <Text
          style={{
            color: "#59d62f",
            marginTop: 8,
            fontWeight: "600",
            fontSize: 13,
          }}
        >
          Forgot your Password?
        </Text>
      </View>
    </SafeAreaView>
  );
}