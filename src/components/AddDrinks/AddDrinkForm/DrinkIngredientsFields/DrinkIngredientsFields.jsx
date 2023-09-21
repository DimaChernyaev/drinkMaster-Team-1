const DrinkIngredientsFields = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setIngredientFieldValue, // Змінено ім'я змінної на setIngredientFieldValue
}) => {
  const handleAddIngredient = () => {
    const newIngredient = { name: '' };
    setIngredientFieldValue('ingredients', [
      ...values.ingredients,
      newIngredient,
    ]);
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = [...values.ingredients];
    newIngredients.splice(index, 1);
    setIngredientFieldValue('ingredients', newIngredients);
  };

  return (
    <div>
      <h2>Інгредієнти</h2>
      <button type="button" onClick={handleAddIngredient}>
        Додати інгредієнт
      </button>
      {values.ingredients.map((ingredient, index) => (
        <div key={index}>
          <label htmlFor={`ingredients[${index}].name`}>
            Інгредієнт {index + 1}
          </label>
          <input
            type="text"
            id={`ingredients[${index}].name`}
            name={`ingredients[${index}].name`}
            value={ingredient.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.ingredients &&
          errors.ingredients &&
          touched.ingredients[index] &&
          errors.ingredients[index] ? (
            <div>{errors.ingredients[index].name}</div>
          ) : null}
          <button type="button" onClick={() => handleRemoveIngredient(index)}>
            Видалити
          </button>
        </div>
      ))}
    </div>
  );
};

export default DrinkIngredientsFields;
