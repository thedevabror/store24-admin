import CreateBrand from "../components/CreateBrand";
import CreateCategry from "../components/CreateCategry";
import CreateProducts from "../components/CreateProducts";
import UserCreate from "../components/UserCreate";
import { Brand, Categories, Products, Users } from "../utils/svg";

const CreateLinks = [
  {
    id: 1,
    name: "Mijoz",
    link: "user",
    icon: <Users />,
    element: <UserCreate />,
  },
  {
    id: 2,
    name: "Maxsulot",
    link: "product",
    icon: <Products />,
    element: <CreateProducts />,
  },
  {
    id: 3,
    name: "Kategoriya",
    link: "category",
    icon: <Categories />,
    element: <CreateCategry />,
  },
  {
    id: 4,
    name: "Brend",
    link: "brand",
    icon: <Brand />,
    element: <CreateBrand />,
  },
];

export { CreateLinks };
