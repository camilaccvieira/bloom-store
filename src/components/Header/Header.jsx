'use client';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

const Header = ({ search, setSearch, view, setView, itemsPerPage, setItemsPerPage, isProductPage }) => {

  if(!isProductPage){
  return (
    <header className="w-full">
      {/* 🔵 Top header: logo, busca, carrinho */}
      <div className="bg-[#4F6DF5] px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <h1 className="text-xl font-bold">Bloom Store</h1>

        {/* Search bar */}
        <div className="relative w-1/2">
          <SearchIcon className="absolute top-2.5 left-3 text-blue-900" />
          <input
            type="text"
            placeholder="Pesquise aqui..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-black placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Carrinho */}
        <button title="Carrinho">
          <ShoppingCartIcon />
        </button>
      </div>

      {/* ⚪ Bottom bar: filtros e view toggle */}
      <div className="bg-[#F5F5F5] px-6 py-2 flex justify-end items-center gap-2 text-sm text-black">
        <span>Exibir</span>
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          className="border text-sm rounded px-2 py-0.5"
        >
          {[5, 10, 15].map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
        <span>por vez</span>

        {/* Toggle list/grid */}
        <button
          className={`p-1 rounded ${view === 'list' ? 'bg-[#4F6DF5] text-white' : 'bg-white text-black'}`}
          onClick={() => setView('list')}
          title="Modo lista"
        >
          <ViewListIcon fontSize="small" />
        </button>
        <button
          className={`p-1 rounded ${view === 'grid' ? 'bg-[#4F6DF5] text-white' : 'bg-white text-black'}`}
          onClick={() => setView('grid')}
          title="Modo grade"
        >
          <ViewModuleIcon fontSize="small" />
        </button>
      </div>
    </header>
  );
}
else{
  return (
    <header className="w-full">
      {/* 🔵 Top header: logo, busca, carrinho */}
      <div className="bg-[#4F6DF5] px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <h1 className="text-xl font-bold">Bloom Store</h1>

        {/* Search bar */}
        <div className="relative w-1/2">
          <SearchIcon className="absolute top-2.5 left-3 text-blue-900" />
          <input
            type="text"
            placeholder="Pesquise aqui..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-black placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Carrinho */}
        <button title="Carrinho">
          <ShoppingCartIcon />
        </button>
      </div>

      {/* ⚪ Bottom bar: filtros e view toggle */}
      <div className="bg-[#F5F5F5] px-6 py-2 flex items-center gap-2 text-sm text-black">
        <span style={{fontSize: '1.5rem'}}>{isProductPage}</span>
       

      </div>
    </header>
  );
}
};

export default Header;
