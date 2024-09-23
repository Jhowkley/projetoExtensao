import { Button, StyleSheet, Text, View } from "react-native";

const Home = (props) => {
	const homeStyle = StyleSheet.create({
		fundo: {
			backgroundColor: "#ff0000",
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
		},
		corTexto: {
			color: "#ffffff",
		},
	});
	return (
		<View style={homeStyle.fundo}>
			<Text style={homeStyle.corTexto}>Página Home</Text>
			<Text style={homeStyle.corTexto}>
				Bem vindo à página incial de achados e perdidos
			</Text>
		</View>
	);
};
export default Home;
