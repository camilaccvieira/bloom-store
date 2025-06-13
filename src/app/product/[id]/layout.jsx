export async function generateStaticParams() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  
  return products.map(product => ({
    id: product.id.toString(),
  }));
}

export default function Layout({ children }) {
  return <>{children}</>;
}