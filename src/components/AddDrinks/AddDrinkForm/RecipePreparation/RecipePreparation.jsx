const RecipePreparation = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) => {
  return (
    <div>
      <h2>Інструкції приготування</h2>
      <textarea
        id="preparationInstructions"
        name="preparationInstructions"
        rows="6"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.preparationInstructions}
      />
      {touched.preparationInstructions && errors.preparationInstructions ? (
        <div>{errors.preparationInstructions}</div>
      ) : null}
    </div>
  );
};

export default RecipePreparation;
