'use client';
import ProductCard from '../ProductCard/ProductCard';
import Pagination from '../Pagination/Pagination';
import { useState } from 'react';
import {
  Wrapper,
  ListViewContainer,
  GridViewContainer,
  PaginationWrapper,
} from './ProductList.styles';

const ProductList = ({ products, view, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter(
    (product) => product.category !== "men's clothing"
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Wrapper>
      {view === 'list' ? (
        <ListViewContainer>
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} view="list" />
          ))}
        </ListViewContainer>
      ) : (
        <GridViewContainer>
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} view="grid" />
          ))}
        </GridViewContainer>
      )}

      <PaginationWrapper>
        <Pagination
          totalItems={products.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </PaginationWrapper>
    </Wrapper>
  );
};

export default ProductList;
