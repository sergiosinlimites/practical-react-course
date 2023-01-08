import CategoriesList from "../containers/CategoriesList";
import Menu from "../containers/Menu";
import '../styles/Categories.scss';

const Categories = () => {
  return (
    <div class="Categories">
      <CategoriesList />
      <Menu />
    </div>
  );
}

export default Categories;