import { useFetchGif } from "../hooks/useFetchGif";
import { GitItem } from "./GifItem";


export const GifGrid = ({category}) => {


  const {images, isLoading} = useFetchGif(category)

  return (
    <>
      <h1>{category}</h1>
      
      {
        isLoading && (<h1>...Cargando</h1>)
      }
      <div className="card-grid">
        { 
          images.map((image) => (
            
            <GitItem 
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
      
    </>
  )
}
