'use client';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import {
  HeaderWrapper,
  TopBar,
  Logo,
  SearchContainer,
  SearchInput,
  BottomBar,
  Select,
  ToggleButton,
} from './Header.styles';

const Header = ({ search, setSearch, view, setView, itemsPerPage, setItemsPerPage, isProductPage }) => {
  return (
    <HeaderWrapper>
      <TopBar>
        <Logo>Bloom Store</Logo>

        <SearchContainer>
          <SearchIcon style={{ position: 'absolute', top: '10px', left: '12px', color: '#1e3a8a' }} />
          <SearchInput
            type="text"
            placeholder="Pesquise aqui..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchContainer>

        <button title="Carrinho">
          <ShoppingCartIcon />
        </button>
      </TopBar>

      <BottomBar $isProductPage={isProductPage}>
        {!isProductPage ? (
          <>
            <span>Exibir</span>
            <Select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              {[5, 10, 15].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </Select>
            <span>por vez</span>
            <ToggleButton
              active={view === 'list'}
              onClick={() => setView('list')}
              title="Modo lista"
            >
              <ViewListIcon fontSize="small" />
            </ToggleButton>
            <ToggleButton
              active={view === 'grid'}
              onClick={() => setView('grid')}
              title="Modo grade"
            >
              <ViewModuleIcon fontSize="small" />
            </ToggleButton>
          </>
        ) : (
          <span style={{ fontSize: '1.5rem' }}>{isProductPage}</span>
        )}
      </BottomBar>
    </HeaderWrapper>
  );
};

export default Header;
