'use client';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
`;

export const TopBar = styled.div`
  background-color: #4F6DF5;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const Logo = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 50%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border-radius: 9999px;
  background-color: white;
  color: black;
  &::placeholder {
    color: #a3a3a3;
  }
  &:focus {
    outline: none;
  }
`;

export const BottomBar = styled.div`
  background-color: #F5F5F5;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: ${({ $isProductPage }) => ($isProductPage ? 'flex-start' : 'flex-end')};
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: black;
`;

export const Select = styled.select`
  border: 1px solid #ccc;
  font-size: 0.875rem;
  border-radius: 4px;
  padding: 0.125rem 0.5rem;
`;

export const ToggleButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})`
  padding: 0.25rem;
  border-radius: 0.375rem;
  background-color: ${({ active }) => (active ? '#4F6DF5' : 'white')};
  color: ${({ active }) => (active ? 'white' : 'black')};
`;
