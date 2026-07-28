import { router } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const go = () => {
    console.log(email, pass);
    router.push("/(tabs)");
  };

  return (
    <View style={s.body}>
      <View style={s.wrap}>
        <Text style={s.t}>Login</Text>

        <Text style={s.t}>Email</Text>
        <TextInput style={s.input} onChangeText={setEmail} value={email} placeholder="Inserir seu e-mail" placeholderTextColor="#999" keyboardType="email-address" autoCapitalize="none"
        />

        <Text style={s.t}>Senha</Text>
        <TextInput style={s.input} onChangeText={setPass} value={pass} placeholder="Inserir sua senha" placeholderTextColor="#999" secureTextEntry
        />

        <TouchableOpacity style={s.button} onPress={go} activeOpacity={0.8}>
          <Text style={s.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0091F1",
  },

  wrap: {
    width: "85%",
    backgroundColor: "#FF0000",
    borderRadius: 30,
    padding: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 25,
  },

  t: {
    color: "#ebebeb",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 16,
    marginBottom: 18,
  },

  button: {
    backgroundColor: "#0091F1",
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 12,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});