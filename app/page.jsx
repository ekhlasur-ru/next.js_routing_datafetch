import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchProducts = async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  return data;
};

const ProductList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Something went wrong: {error.message}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1 >Products</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {data.map((product) => (
          <li key={product.id} style={{ marginBottom: '10px' }}>
            <strong>{product.title}</strong> - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
