import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../api/productService';

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(id),
  });
};
