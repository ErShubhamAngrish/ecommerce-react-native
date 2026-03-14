import {
  createStaticNavigation,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from '../screen/ProductList';
import ProductDetails from '../screen/ProductDetailsScreen';

export default function RootNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={ProductList}></Stack.Screen>
        <Stack.Screen name="ProductsDetial" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
