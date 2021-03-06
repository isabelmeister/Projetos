import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/Api';
import Context from '../context/Context';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function ExplorarBebidasingredientes({ history }) {
  const {
    titulo,
    setTitulo,
    loading,
    setLoading,
    setDrinksByIngredient,
    setShowDrinksByIngredient,
  } = useContext(Context);
  const [ingredients, setIngredients] = useState([]);

  const fetchIngredients = async () => {
    setLoading(true);
    const response = await api.fetchDrinkIngredients();
    setIngredients(response);
    setLoading(false);
  };

  useEffect(() => {
    setTitulo('Explorar Ingredientes');
    fetchIngredients();
  }, []);

  const onClick = async (name) => {
    setLoading(true);
    const response = await api.fetchDrinkByIngredients(name);
    setDrinksByIngredient(response);
    setShowDrinksByIngredient(true);
    setLoading(false);
  };

  const handleClick = async (name) => {
    await onClick(name);
    history.push('/bebidas');
  };

  const twelve = 12;

  return (
    <div>
      <Header titulo={ titulo } />
      <div className="d-flex flex-wrap">
        {loading ? <p>Loading</p>
          : (
            ingredients.filter((ingredient, index) => ingredient && index < twelve)
              .map((ingredient, index) => (
                <button
                  className="btn font-weight-bold flex-grow-1 border-2 border-warning m-1"
                  data-testid={ `${index}-ingredient-card` }
                  key={ index }
                  type="button"
                  onClick={ () => handleClick(ingredient.strIngredient1) }
                >
                  <p
                    className="toast-header bg-warning"
                    data-testid={ `${index}-card-name` }
                  >
                    { ingredient.strIngredient1 }
                  </p>
                  <img
                    className="toast-body"
                    data-testid={ `${index}-card-img` }
                    src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
                    alt={ `${ingredient.strIngredient1}-pic` }
                  />
                </button>
              ))
          )}
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

ExplorarBebidasingredientes.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
