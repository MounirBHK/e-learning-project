import React, { useEffect, useState } from 'react'
import SearchBar from './components/searchbar/SearchBar'
import ProductTable from './components/products/ProductTable'

function App() {

  const [backendData, setBackendData] = useState([]);
  const [search, setSearch] = useState('')
  const [showStockedOnly, setShowStockedOnly] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();

        if (data && data.PRODUCTS && Array.isArray(data.PRODUCTS)) {
          setBackendData(data.PRODUCTS);
        } else {
          console.error("Le format des données retournées n'est pas conforme.");
        }
      } catch (error) {
        console.error("Erreur de récupération des données:", error);
      }
    };

    fetchData();
  }, []);

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const visibleProducts = backendData.filter((product) => (
    (!showStockedOnly || product.stocked) &&
    (!search || removeAccents(product.name).toLocaleLowerCase().includes(removeAccents(search).toLocaleLowerCase()))
  ));


  return (
    <div>
      {typeof backendData === 'undefined' ? (
        <p>Loading...</p>
      ) : (
        <>
          <SearchBar
            search={search}
            setSearch={setSearch}
            showStockedOnly={showStockedOnly}
            setShowStockedOnly={setShowStockedOnly}
          />
          <ProductTable products={visibleProducts} />
        </>
      )}
    </div>
  );

}

export default App
