'use client';
import { useCart } from '../../context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/navigation';
import {
  ListContainer,
  GridContainer,
  ProductImage,
  ImageCenter,
  Details,
  Title,
  Category,
  Price,
  Description,
  AddToCartButton,
} from './ProductCard.styles';

const ProductCard = ({ product, view }) => {
  const { addToCart } = useCart();
  const router = useRouter();

  const goToDetails = () => {
    router.push(`/product/${product.id}`);
  };

  if (view === 'list') {
    return (
      <ListContainer onClick={goToDetails}>
        <ProductImage src={product.image} alt={product.title} />
        <Details>
          <Title>{product.title}</Title>
          <Category>{product.category.toUpperCase()}</Category>
          <Price>R$ {product.price.toFixed(2).replace('.', ',')}</Price>
          <Description>{product.description}</Description>
        </Details>
        <AddToCartButton onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}>
          <ShoppingCartIcon fontSize="small" />
        </AddToCartButton>
      </ListContainer>
    );
  }

  return (
    <GridContainer onClick={goToDetails}>
      <ImageCenter src={product.image} alt={product.title} />
      <Details style={{ paddingTop: '1rem' }}>
        <Title>{product.title}</Title>
        <Category>{product.category}</Category>
        <Price>R$ {product.price.toFixed(2).replace('.', ',')}</Price>
        <Description>{product.description}</Description>
      </Details>
      <AddToCartButton
        style={{ marginTop: '1rem' }}
        onClick={() => addToCart(product)}
      >
        <ShoppingCartIcon fontSize="small" />
      </AddToCartButton>
    </GridContainer>
  );
};

export default ProductCard;
