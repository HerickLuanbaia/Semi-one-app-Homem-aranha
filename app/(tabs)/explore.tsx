import { StyleSheet, Text, View, ScrollView, Image,ImageSourcePropType,} from "react-native";

type Vilao = {
  id: string;
  titulo: string;
  descricao: string;
imagem: ImageSourcePropType | undefined;
};

const Viloes: Vilao[] = [
  {
    id: "1",
    titulo: "Duende Verde",
    descricao: "Um dos maiores inimigos do Homem-Aranha.",
    imagem: require("../../assets/Duende verde.jpg") // Altere para o nome correto do arquivo
  },
  {
    id: "2",
    titulo: "Venom",
    descricao: "Um simbionte alienígena muito perigoso.",
    imagem: require("../../assets/Venom.jpeg")
  },
  {
    id: "3",
    titulo: "Doutor Octopus",
    descricao: "Um cientista brilhante com braços mecânicos.",
    imagem: require("../../assets/doutor-octopus-nos-quadrinhos.jpg")
  },
];

export default function Explore() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Vilões</Text>

      {Viloes.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.imagem} style={styles.image} />

          <Text style={styles.nome}>{item.titulo}</Text>
          <Text style={styles.desc}>{item.descricao}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    padding: 20,
  },

  title: {
    color: "#E50914",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#111",
    borderRadius: 20,
    marginBottom: 25,
    overflow: "hidden",
    elevation: 10,
  },

  image: {
    width: "100%",
    height: 280,
    resizeMode: "cover",
  },

  nome: {
    color: "#E50914",
    fontSize: 25,
    fontWeight: "bold",
    padding: 15,
    paddingBottom: 5,
  },

  desc: {
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
});