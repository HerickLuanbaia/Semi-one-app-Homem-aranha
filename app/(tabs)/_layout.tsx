import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,

        headerStyle: {
          backgroundColor: "#050505",
        },

        headerTitleStyle: {
          color: "#E50914",
          fontWeight: "bold",
          fontSize: 20,
        },

        tabBarStyle: {
          backgroundColor: "#fff",
        },
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          headerTitle: "O Espetacular Homem-Aranha",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Vilões",
          headerTitle: "Vilões do Homem-Aranha",
          tabBarIcon: ({ color }) => (
            <Ionicons name="skull" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="list"
        options={{
          title: "Lista de Atores",
          headerTitle: "Atores do Espetacular Homem-Aranha",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" size={22} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}