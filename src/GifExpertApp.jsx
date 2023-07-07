
import { useState } from "react";
import { AddCategory, GifGrid} from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['']);

  const addCategory = (value) => {

    if(categories.includes(value)) return;
    setCategories([...categories, value]);

  };

  return (
    <>
      <h1>Gif Grid</h1>

      <AddCategory 
         onNewCategory={ addCategory }
      />

      {categories.map((category) => (
        <GifGrid 
           key={category}
           category={category}
        /> 
      ))}
    </>
  );
};
