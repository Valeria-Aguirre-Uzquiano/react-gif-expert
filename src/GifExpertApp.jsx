import { useState } from "react"
import { AddCategory, GifGrid} from "./components";

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['Black Butler']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories(
            [newCategory, ...categories]
           // cat => [...cat, 'Hazbin Hotel']
        );
    }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}
        {/* <AddCategory setCategories={setCategories}/> */}
        {/* <button onClick={onAddCategory}>Agregar</button> */}

        <AddCategory onNewCategory={onAddCategory}/>

        {/* listado de gifs */}
        
        {categories.map(
            cat => (
                <GifGrid key={cat} category={cat}/>
            )
        
        )}
            
        
    </>
  )
}
