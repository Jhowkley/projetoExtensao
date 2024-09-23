import { StyleSheet, Text, View } from "react-native";
import Avatar from "../../components/Avatar";
import DefaultInput from "../../components/Avatar/DefaultInput";
import DefaultButton from "../../components/Avatar/DefaultButton";

const Register = () => {
	const homeStyle = StyleSheet.create({
		fundo: {
			backgroundColor: "#3306fc",
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			gap:20,
		},
		corTexto: {
			color: "#ffffff",
		},
	});
	return (
		<View style={homeStyle.fundo}>
			<Avatar cor={"#1ffc06"} />
			<Text style={homeStyle.corTexto}>Página de Registro</Text>

			<DefaultInput
				placeholder="Nome"
			/>
			<DefaultInput
				placeholder="Digite seu Email"
			/>
			<DefaultInput
				placeholder="Digite sua senha" />

			<DefaultButton
			label="Registrar"
			bg="#59ff00"
			txt="#060101"
		/>
		</View>
	);
};
export default Register;
