import ImageCard from "./components/ImageCard";
import "./App.css"
function App(){

  const images=[
    {id:1,
    title:"Beautiful Nature",
    description:"Enjoy the beauty of nature",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600"

    },
  {id:2,
    title:"Beautiful Mountains",
    description:"Explore amazing mountains",
image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600"
  },
{id:3,
  title:"Beautiful Forest",
  description:"Discover green forests",
  image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600"
}]

return(
  <div className="gallery-container">
    <h1 className="gallery-heading">Image Gallery</h1>
    <div className="gallery-grid">
    {images.map((item)=>(
      <ImageCard 
      key={item.id}
      title={item.title}
      description={item.description}
      image={item.image}/>
    ))}
    </div>
  </div>
)
}
export default App