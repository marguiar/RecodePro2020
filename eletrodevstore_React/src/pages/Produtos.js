import React from "react";
import "../style/products.css";

const Produtos = (props) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function catchProducts() {
      const response = await fetch("http://localhost/PHP_to_React/products.php");
      const result = await response.json();
      setProducts(result);
    }
    catchProducts();
  }, []);
  
  return (
    <div className="productContainer">
      
      <div className="categories">
      <h3>Categorias</h3>
      {products &&
        products.map(({categoria, id_produto}) => (
            <button key={id_produto} className="categoriesButtons">
              {categoria}
            </button>
        ))}
         </div>

      <section className="productSection">
        {products &&
          products.map(
            ({ id_produto, descricao, preco_antigo, preco_novo, imagem, alt_imagem }) => (
              <div key={id_produto} className="productCards">
                <img className="image" src={imagem} alt={alt_imagem} />
                <h3>{descricao}</h3>
                <p className="oldPrice">R$ {preco_antigo},00</p>
                <p className="newPrice">R$ {preco_novo},00</p>
                <button>
                  <i className="fas fa-shopping-basket"></i>Comprar
                </button>
              </div>
            )
          )}
      </section>
    </div>
    
  );
};

export default Produtos;
