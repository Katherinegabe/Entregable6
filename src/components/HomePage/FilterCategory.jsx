import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import {
  getAllProductsThunk,
  getFilteredProductsThunk,
} from "../../store/slices/products.slice";
import { useDispatch } from "react-redux";
import './styles/FilterCategory.css'

const FilterCategory = () => {
  const [categories, getAllCategories] = useFetch();

  useEffect(() => {
    getAllCategories("/categories");
  }, []);

  console.log(categories);

  const dispatch = useDispatch();

  const handleAllCategoies = () => {
    dispatch(getAllProductsThunk());
  };

  const handleFilterCategories = id => {
    dispatch(getFilteredProductsThunk(id));
  };

  return (
    <article className="filter_container">
      <h3 className="filter_title">Category</h3>
      <hr />
      <ul className="filter_ul">
        <li onClick={handleAllCategoies}>All categories</li>
        {categories?.map((category) => (
          <li onClick={() => handleFilterCategories(category.id)} 
              key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default FilterCategory;
