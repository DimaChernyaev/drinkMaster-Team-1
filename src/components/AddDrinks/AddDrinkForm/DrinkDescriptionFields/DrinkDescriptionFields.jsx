import {
  ImageWrapper,
  InputImageWrapper,
  Input,
  Label
} from './DrinkDescriptionFields.styled';
// Компонент для полів опису коктейлю
const DrinkDescriptionFields = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFieldValue('image', file);
  };

  return (
    <div>
      <ImageWrapper>
        <InputImageWrapper>
          <Input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
          />
          <Label htmlFor="image"> <span>+</span>Add image</Label>
        </InputImageWrapper>
        {touched.image && errors.image ? <div>{errors.image}</div> : null}
      </ImageWrapper>
      <div>
        <label htmlFor="name">Назва коктейлю</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
        {touched.name && errors.name ? <div>{errors.name}</div> : null}
      </div>
      <div>
        <label htmlFor="description">Опис коктейлю</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.description}
        />
        {touched.description && errors.description ? (
          <div>{errors.description}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="category">Категорія коктейлю</label>
        <select
          id="category"
          name="category"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.category}
        >
          {/* Опції для вибору категорії коктейлю */}
        </select>
        {touched.category && errors.category ? (
          <div>{errors.category}</div>
        ) : null}
      </div>
      <div>
        <label>Сервування</label>
        <select
          id="serving"
          name="serving"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.serving}
        >
          {/* Опції для вибору типу сервування */}
        </select>
        {touched.serving && errors.serving ? <div>{errors.serving}</div> : null}
      </div>
      <div>
        <label>Тип коктейлю</label>
        <div>
          <label>
            <input
              type="radio"
              name="isAlcoholic"
              value="true"
              checked={values.isAlcoholic === 'true'}
              onChange={handleChange}
            />{' '}
            Алкогольний
          </label>
          <label>
            <input
              type="radio"
              name="isAlcoholic"
              value="false"
              checked={values.isAlcoholic === 'false'}
              onChange={handleChange}
            />{' '}
            Безалкогольний
          </label>
        </div>
        {touched.isAlcoholic && errors.isAlcoholic ? (
          <div>{errors.isAlcoholic}</div>
        ) : null}
      </div>
    </div>
  );
};

export default DrinkDescriptionFields;
