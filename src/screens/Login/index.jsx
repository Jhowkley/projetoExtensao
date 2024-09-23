import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import DefaultInput from "../../components/Avatar/DefaultInput";
import DefaultButton from "../../components/Avatar/DefaultButton";

const Login = (props) => {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	const loginUser = () => {
		const userEmail ="teste@gmail.com";
		const userPassaword = "1234";
		if(userEmail === email && userPassaword === senha){
			console.warn("Logado com sucesso");
			props.navigation.navegate('Home');
		}
		else {console.warn('Usuario ou senha invalido');
		}
	};

	const homeStyle = StyleSheet.create({
		fundo: {
			backgroundColor: "#3306fc",
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			gap: 20,
		},
		corTexto: {
			color: "#ffffff",
		},
		input: {
			backgroundColor: "#ffffff",
			width: 300,
			height: 35,
			padding: 10,
			borderRadius: 5,


		}
	});
	return (
		<View style={homeStyle.fundo}>
			<Avatar cor={"#1ffc06"} />
			<DefaultInput
				placeholder="Digite seu Email"
				change={(e) => setEmail(e)}
				value={email}
			/>

			<DefaultInput
				placeholder="Digite sua Senha"
				change={(e) => setSenha(e)}
				value={senha}
				secure
			/>
			<DefaultButton 
				onPress={() => { 
					loginUser();		
				}} 
				label="SALVAR"
				bg="#59ff00"
				txt="#060101"
				/>
				
			<DefaultButton
		        onPress={() => {
					props.navigation.navigate("Registrar");
				}}
				label="REGISTRAR"
				txt="#ffffff"
				/>
			
		</View>
	);
};
export default Login;
