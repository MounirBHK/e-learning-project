import React, { useEffect, useState } from 'react'
import SearchBar from './components/searchbar/SearchBar'
import ProductTable from './components/products/ProductTable'

function App() {

  const [backendData, setBackendData] = useState([]);
  const [search, setSearch] = useState('')
  const [showStockedOnly, setShowStockedOnly] = useState(false)

  // Récupération des produits à partir de notre API (voir fichier server.js)
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

  // Éviter les caractères accentués pour assurer une recherche correcte
  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  // Filtrer les roduit selon
  // le choix de l'affichage ( showStockedOnly ),
  // le stock (stocked === true) et
  // la valeur saisie dans la zone de recherche
  const visibleProducts = backendData.filter((product) => (
    (!showStockedOnly || product.stocked) &&
    (!search || removeAccents(product.name).toLocaleLowerCase().includes(removeAccents(search).toLocaleLowerCase()))
  ));


  return (
    <div>
      {typeof backendData === 'undefined' ? (
        <p>Loading...</p>
      ) : (
        <div>
          <SearchBar
            search={search}
            setSearch={setSearch}
            showStockedOnly={showStockedOnly}
            setShowStockedOnly={setShowStockedOnly}
          />
          <hr />
          <ProductTable products={visibleProducts} />
        </div>
      )}
    </div>
  );


}

export default App
