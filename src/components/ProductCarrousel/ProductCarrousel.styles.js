import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

export const Title = styled.h2`
  font-size: 0.875rem;
  font-weight: bold;
  color: #1e3a8a;
  text-transform: uppercase;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
`;

export const ScrollButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'left',
})`
  position: absolute;
  top: 55%;
  ${(props) => (props.left ? 'left: 0' : 'right: 0')};
  z-index: 10;
  background-color: white;
  border-radius: 9999px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 0.25rem;
  transform: translateY(-50%);
  &:hover {
    background-color: #dbeafe;
  }
`;

export const ScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  display: flex;
  justify-content: space-evenly;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: max-content;
  padding-right: 1.5rem;
  
`;

export const ProductCard = styled.div`
  position: relative;
  min-width: 170px;
  background-color: white;
  padding: 1rem;
  text-align: center;
  flex-shrink: 0;
`;

export const Badge = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #4F6DF5;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 0.125rem 0.5rem;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
`;

export const ImageWrapper = styled.div`
  border: 2px solid #1B2BA6;
  border-radius: 0.375rem;
  padding: 0.25rem;
  margin-bottom: 0.5rem;
  img {
    width: 96px;
    height: 96px;
    object-fit: contain;
    margin: 0 auto;
  }
`;

export const OldPrice = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  color: #374151;
  text-decoration: line-through;
`;

export const CurrentPrice = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  color: #111827;
`;

export const BuyButton = styled.button`
  margin-top: 0.75rem;
  background-color: #1B2BA6;
  &:hover {
    background-color: #2c3fe5;
  }
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.375rem 0.75rem;
  border-radius: 1rem;
  width: 100%;
`;
