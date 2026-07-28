import {StyleSheet,Image,ScrollView, TouchableOpacity,View,Text,} from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
  <ScrollView contentContainerStyle={s.container}>
      <Image source={require("../../assets/guerra-de-gangues-1.webp")}
      style={s.image}
      />

      <View style={s.content}>
        <Text style={s.title}>Homem-Aranha</Text>

        <Text style={s.paragraph}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ea
          vitae mollitia maxime fuga amet necessitatibus, pariatur, obcaecati
          ratione impedit sit quibusdam architecto! Neque veritatis dolor nam
          velit ipsa quasi.
        </Text>

        <TouchableOpacity style={s.button}onPress={() => router.push("/explore")}>
          <Text style={s.buttonText}>Lista de vilões</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#050505",
  },

  image: {
    width: "100%",
    height: 520,
    resizeMode: "cover",
  },

  content: {
    padding: 20,
    backgroundColor: "#050505",
  },

  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#E50914",
    marginBottom: 15,
    textShadowColor: "#000",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 5,
  },

  paragraph: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 25,
    textAlign: "justify",
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#E50914",
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: "center",

    shadowColor: "#ff0000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 15,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "900",
    textTransform: "uppercase",
  },
});