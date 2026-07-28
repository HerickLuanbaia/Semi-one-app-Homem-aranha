import {StyleSheet,Text,View,ScrollView,Image,} from "react-native";

type Vilao = {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
};

const Viloes: Vilao[] = [
  {
    id: "1",
    titulo: "Duende Verde",
    descricao: "Um dos maiores inimigos do Homem-Aranha.",
    imagem:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhI9qf97ki1Wpq1C7ZZvzSrxc-zNBddW5rOf2_1v_53_mLsEI8gCLqlUrB_6ldR-otlSJ96YsrambCb8xlA9czgMmUoAoZnbHcJQtz8Mgb2pz8gM3uMbNPKZBJqG5QdjvjXBeqAomFMMpgF/s1600/Duende+verde.jpg",
  },
  {
    id: "2",
    titulo: "Venom",
    descricao: "Um simbionte alienígena muito perigoso.",
    imagem:"https://t.ctcdn.com.br/RlhwYtvaovLqlulzwOeAGBIVy6s=/900x675/smart/i527727.jpeg",
  },
  {
    id: "3",
    titulo: "Doutor Octopus",
    descricao: "Um cientista brilhante com braços mecânicos.",
    imagem:"https://www.boletimnerd.com.br/wp-content/uploads/2025/02/doutor-octopus-nos-quadrinhos.jpg",
  },
];

export default function Explore() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Lista de Vilões</Text>

      {Viloes.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image
            source={{ uri: item.imagem }}
            style={styles.image}
          />

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