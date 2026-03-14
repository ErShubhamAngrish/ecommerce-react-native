import { FlatList, Text, View } from 'react-native';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';

const ProductList = () => {
  const { data, isLoading } = useProducts();
  const navigation = useNavigation();

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <FlatList
      data={data}
      initialNumToRender={10}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{ gap: 10, marginLeft: 10, marginRight: 10 }}
      contentContainerStyle={{ gap: 15 }}
      renderItem={({ item }) => (
        <ProductCard
          onPress={() => navigation.navigate('ProductsDetial')}
          title={item.title}
          image={item.image}
          price={item.price}
        ></ProductCard>
      )}
    />
  );
};

export default ProductList;
