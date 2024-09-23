import { TextInput, StyleSheet} from "react-native";

const DefaultInput = (props) => {
    const inputStyle = StyleSheet.create({
        input: {
            backgroundColor: "#ffffff",
			width: 300,
			height: 35,
			padding: 10,
			borderRadius: 5,
        },
    });
    return (
        <TextInput
        style={inputStyle.input}
        placeholder= {props.placeholder}
        onChangeText={props.change}
        defaultValue={props.value}
        secureTextEntry={props.secure}
        keyboardType={props.keyType}
    />
    );
};
export default DefaultInput;