
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
`;

export const Content = styled.main`
  max-width: 90rem;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  padding: 2rem 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .border-box {
    border: 2px solid #0B1A8E;
    border-radius: 0.75rem;
    padding: 1.5rem;
    max-width: 250px;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const RatingBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  .sku {
    font-size: 2rem;
    color: #374151;
    font-weight: bold;
  }

  .comments {
    font-size: 1rem;
    color: #374151;
    font-weight: 500;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-size: 1.5rem;
      color: #CFC248;
    }
  }
`;

export const Category = styled.div`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #1f2937;

  p {
    margin-top: 0.25rem;
    font-size: 1.5rem;
    color: #4b5563;
    text-transform: none;
    font-weight: normal;
  }
`;

export const PriceBox = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 6px 3px rgba(0, 0, 0, 0.06);
  max-width: 100%;
  width: 100%;

.badge {
    position: absolute;
    top: -0.75rem;
    right: -0.75rem;
    background-color: #5062F0;
    color: white;
    font-weight: 700;
    padding: 0.25rem 0.75rem;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    text-align: -webkit-center;
  }

  .original {
    font-size: 0.875rem;
    color: #6b7280;
    text-decoration: line-through;
    margin-bottom: 0.25rem;
  }

  .current {
    font-size: 1.625rem;
    font-weight: 800;
    color: #000000;
    margin-bottom: 1rem;
  }

  .base-price {
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 0.25rem;
  }

  button {
    width: 100%;
    background-color: #1b2ba6;
    color: white;
    font-weight: 700;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #2c3fe5;
    }

    svg {
      height: 1.25rem;
      width: 1.25rem;
    }
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 2rem;
    right: 2rem;
    max-width: 20rem;
    width: auto;
  }
`;

export const Description = styled.div`
  margin-top: auto;

  .title {
    font-size: 2rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  .text {
    background-color: #D9D9D9;
    padding: 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
    color: #374151;
    line-height: 1.6;
  }
`;
