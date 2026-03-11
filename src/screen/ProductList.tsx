import { FlatList, Text, View } from "react-native";
import { useProducts } from "../hooks/useProducts";


const ProductList = () => {
   const {data,isLoading} = useProducts();

   if(isLoading){
    return <Text>Loading</Text>
   }


  return (
    <FlatList 
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <Text>{item.title}</Text>
      )}
      />
  );
};

export default ProductList;