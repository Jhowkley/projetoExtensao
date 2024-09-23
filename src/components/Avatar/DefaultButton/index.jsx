import { Pressable, StyleSheet, Text } from "react-native"

const DefaultButton = (props) => {
    const pressableStyle = StyleSheet.create({
        bg: {
            widht: 500,
            height: 30,
            backgroundColor: props.bg,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
        },
        txt: {
            color: props.txt,
            fontWeight: "bold",
            fontSize: 15,
        },
    });
    return (
        <Pressable style={pressableStyle.bg} onPress={props.onPress}>
            <Text style={pressableStyle.txt}>{props.label}</Text>
        </Pressable>
    );
};
export default DefaultButton;