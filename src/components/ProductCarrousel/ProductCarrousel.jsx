'use client';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useCart } from '../../context/CartContext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  Section,
  Title,
  ScrollButton,
  ScrollContainer,
  ProductsWrapper,
  ProductCard,
  Badge,
  ImageWrapper,
  OldPrice,
  CurrentPrice,
  BuyButton,
} from './ProductCarrousel.styles';
import { useRouter } from 'next/navigation';

const ProductCarrousel = ( {product}) => {
  const [mensClothing, setMensClothing] = useState([]);
  const { addToCart } = useCart();
  const scrollRef = useRef(null);
  const router = useRouter();
  

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => setMensClothing(res.data));
  }, []);

  const scroll = (direction) => {
    const scrollContainer = scrollRef.current;
    const scrollAmount = 200;

    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const goToDetails = ({id}) => {
    router.push(`/product/${id}`);
  };

  return (
    <Section>
      <Title>MEN'S CLOTHING</Title>

      <ScrollButton onClick={() => scroll('left')} left>
        <ChevronLeftIcon fontSize="small" />
      </ScrollButton>

      <ScrollButton onClick={() => scroll('right')}>
        <ChevronRightIcon fontSize="small" />
      </ScrollButton>

      <ScrollContainer ref={scrollRef}>
        <ProductsWrapper >
          {mensClothing.map((product) => {
            const currentPrice = (product.price * 0.9).toFixed(2).replace('.', ',');
            const originalPrice = product.price.toFixed(2).replace('.', ',');

            return (
              <ProductCard key={product.id}>
                <Badge>10% OFF</Badge>
                <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => goToDetails({ id: product.id })}>
                  <ImageWrapper>
                    <img
                      src={product.image}
                      alt={product.title}
                    />
                  </ImageWrapper>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <OldPrice>DE: R$ {originalPrice}</OldPrice>
                    <CurrentPrice>POR: R$ {currentPrice}</CurrentPrice>
                  </div>
                </div>
                <BuyButton onClick={() => addToCart(product)}>COMPRAR</BuyButton>
              </ProductCard>
            );
          })}
        </ProductsWrapper>
      </ScrollContainer>
    </Section>
  );
};

export default ProductCarrousel;
