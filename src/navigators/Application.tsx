import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Example, Startup } from '@/screens';
import { useTheme } from '@/theme';

import type { RootStackParamList } from '@/types/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Toasts } from '@backpackapp-io/react-native-toast';
import { useNetwork } from '@/hooks/network/NetworkProvider';
import NoConnection from '@/screens/NoConnection/NoConnection';

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();
	const isConnected = useNetwork();
	return (
		<SafeAreaProvider>
			<GestureHandlerRootView >
				{isConnected ===false ? <NoConnection/> :
					<NavigationContainer theme={navigationTheme}>
						<Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
							<Stack.Screen name="Startup" component={Startup} />
							<Stack.Screen name="Example" component={Example} />
						</Stack.Navigator>
					</NavigationContainer>
				}
				<Toasts
				defaultStyle={{
					view:{
						backgroundColor: variant==="dark"? '#212331':"#f7f7f7"
					},
					pressable:{
						backgroundColor: variant==="dark"? '#212331':"f7f7f7"

					},
					text:{
						color:variant==="dark"? "white":"black"
					}
				}}
				/>
			</GestureHandlerRootView>
		</SafeAreaProvider>
	);
}

export default ApplicationNavigator;
