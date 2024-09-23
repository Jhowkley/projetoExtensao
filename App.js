import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import AuthStack from "./src/routes/AuthStack";

const App = () => {
	const Stack = createNativeStackNavigator();
	const Tab = createBottomTabNavigator();

	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName='Home'>
				<Tab.Screen name='Auth' component={AuthStack} />
				<Tab.Screen name='Home' component={Home} />
				<Tab.Screen name='Perfil' component={Home} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default App;
