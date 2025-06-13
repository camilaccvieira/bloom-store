import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

export const GridContainer = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductImage = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: contain;
  background-color: white;
  padding: 0.5rem;
`;

export const ImageCenter = styled(ProductImage)`
  margin: 0 auto;
`;

export const Details = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 0.875rem;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

export const Category = styled.p`
  font-size: 11px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0.25rem;
  color: black;
`;

export const Description = styled.p`
  font-size: 11px;
  color: #4b5563;
  margin-top: 0.25rem;
  line-height: 1.25;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const AddToCartButton = styled.button`
  background-color: #1e3a8a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 48px;
  padding: 0.5rem 1rem;
  transition: background 0.2s ease;

  &:hover {
    background-color: #1e40af;
  }
`;
