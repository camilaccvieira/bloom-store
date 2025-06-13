'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '../../../components/Header/Header';
import Rating from '@mui/material/Rating';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Container,
  Content,
  Card,
  ImageWrapper,
  Details,
  RatingBlock,
  Category,
  PriceBox,
  Description
} from './page.styles';


export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [view, setView] = useState('list');

  useEffect(() => {
    if (!params?.id) return;
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [params?.id]);

  if (loading) return <div className="text-center py-8">Carregando...</div>;

  const originalPrice = (product.price * 1.1).toFixed(2).replace('.', ',');
  const currentPrice = product.price.toFixed(2).replace('.', ',');

  return (
  <Container>
    <Header
      isProductPage={product.title}
      search={search}
      setSearch={setSearch}
      view={view}
      setView={setView}
      itemsPerPage={itemsPerPage}
      setItemsPerPage={setItemsPerPage}
    />

    <Content>
      <Card>
        <ImageWrapper>
          <div className="border-box">
            <img src={product.image} alt={product.title} />
          </div>
        </ImageWrapper>

        <Details>
          <RatingBlock>
            <p className="sku">SKU {product.id}</p>
            <div className="rating">
              <Rating value={product.rating.rate} precision={0.1} readOnly size="small"  sx={{color: '#CFC248'}}/>
              
            </div>
            <p className="comments" >{product.rating.rate} ({product.rating.count} comentários)</p>
          </RatingBlock>

          <Category>
            CATEGORIA
            <p>{product.category.toUpperCase()}</p>
          </Category>

          <Description>
            <p className="title">Descrição</p>
            <p className="text">{product.description}</p>
          </Description>
        </Details>
          <PriceBox>
            <div className="badge">10% OFF</div>
            <div className="original">DE: R$ {originalPrice}</div>
            <div className="current">POR: R$ {currentPrice}</div>
            <button>
              <ShoppingCartIcon />
              COMPRAR
            </button>
          </PriceBox>
      </Card>
    </Content>
  </Container>
);
}
