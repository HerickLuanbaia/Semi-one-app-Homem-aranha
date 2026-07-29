import { StyleSheet,  Text,  View,  ScrollView,  Image,  ImageSourcePropType } from "react-native";

type Atores = {
  id: string;
  titulo: string;
  descricao: string;
  imagem: ImageSourcePropType | undefined;
};

const AtoresLista: Atores[] = [
  {
    id: "1",
    titulo: "Andrew Garfield",
    descricao: "Peter Parker / Homem-Aranha",
    imagem: require("../../assets/Andrew.jpg"),
  },
  {
    id: "2",
    titulo: "Emma Stone",
    descricao: "Gwen Stacy",
    imagem: require("../../assets/Emma.jpg"),
  },
  {
    id: "3",
    titulo: "Martin Sheen",
    descricao: "Tio Ben Parker",
    imagem: require("../../assets/Tio.jpg"),
  },
  {
    id: "4",
    titulo: "Sally Field",
    descricao: "Tia May Parker",
    imagem: require("../../assets/TIA.jpg"),
  },
  {
    id: "5",
    titulo: "Denis Leary",
    descricao: "Capitão George Stacy",
    imagem: require("../../assets/Denis.jpg"),
  },
  {
    id: "6",
    titulo: "Rhys Ifans",
    descricao: "Dr. Curt Connors / Lagarto",
    imagem: require("../../assets/Curt.jpg"),
  },
  {
    id: "7",
    titulo: "Dane DeHaan",
    descricao: "Harry Osborn / Duende Verde",
    imagem: require("../../assets/Dane DeHaan.webp"),
  },
];

export default function Explore() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Atores</Text>

      {AtoresLista.map((item) => (
        <View key={item.id} style={styles.card}>

          <Image 
            source={item.imagem} 
            style={styles.image} 
          />

          <View style={styles.info}>
            <Text style={styles.nome}>{item.titulo}</Text>
            <Text style={styles.desc}>{item.descricao}</Text>
          </View>

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
  borderRadius: 15,
  marginBottom: 15,
  padding: 10,
  elevation: 5,
  flexDirection: "row",
  alignItems: "center",
},

image: {
  width: 70,
  height: 70,
  borderRadius: 100,
},

  info: {
    marginLeft: 15,
    flex: 1,
  },

  nome: {
    color: "#E50914",
    fontSize: 22,
    fontWeight: "bold",
  },

  desc: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
  },
});