import { StyleSheet, View } from "react-native";

const Avatar = (props) => {
	const avatarStyle = StyleSheet.create({
		styleAvatar: {
			backgroundColor: props.cor,
			width: 100,
			height: 100,
			borderRadius: 50,
		},
	});

	return <View style={avatarStyle.styleAvatar}></View>;
};

export default Avatar;
