import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../../screens/Register";
import Login from "../../screens/Login";

const AuthStack = () => {
	const AuthStack = createNativeStackNavigator();
	return (
		<AuthStack.Navigator initialRouteName='Login'>
			<AuthStack.Screen name='Login' component={Login} />
			<AuthStack.Screen name='Registrar' component={Register} />
		</AuthStack.Navigator>
	);
};
export default AuthStack;
