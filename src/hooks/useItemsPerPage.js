import { useState, useEffect } from 'react';

// / Кастомный хук для определения itemsPerPage в зависимости от ширины экрана
function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(); // Значение по умолчанию

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1438) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(9);
      }
    }

    // Добавьте слушателя события изменения размера экрана
    window.addEventListener('resize', handleResize);

    // Вызовите функцию обработки изменения размера экрана при монтировании компонента
    handleResize();

    // Уберите слушателя события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return itemsPerPage;
}

export default useItemsPerPage;
