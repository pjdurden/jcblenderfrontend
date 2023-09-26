import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.style";

export type DirectoryCategory = {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: "Delhi",
    imageUrl: "src/assets/Delhi-India-Gate.jpg",
    route: "shop/jackets",
  },
  {
    id: 2,
    title: "Mumbai",
    imageUrl: "src/assets/Mumbai-Shivaji-Terminal.jpg",
    route: "shop/sneakers",
  },
  {
    id: 3,
    title: "Bangalore",
    imageUrl: "src/assets/BangaloreVidhanSoudha.jpg",
    route: "shop/womens",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
