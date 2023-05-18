
import "./Components/Style/Movies.css"
import MTranding from "./Components/MTranding"
import NewMovi from "./Components/NewMovi"
import NewMovie from "./Components/NewMovie"
import img from "./assets/Image/images.png"
import pic from "./assets/Image/image1.jpg"
import pic1 from "./assets/Image/image2.jpg"
import pic2 from "./assets/Image/image3.jpg"
import pic3 from "./assets/Image/image4.jpg"
import imgs from "./assets/Image/image5.jpg"
import imgs1 from "./assets/Image/image6.jpg"
import imgs2 from "./assets/Image/image7.jpg"
import imgs3 from "./assets/Image/image8.jpg"
import imag from "./assets/Image/download.jpg"
import film from "./assets/Image/icons8-film-48.png"
import bxl from "./assets/Image/bxl-microsoft.svg"
import tv from "./assets/Image/tv-solid.svg"
import movie from "./assets/Image/icons8-movie-24.png"
import search from "./assets/Image/bx-search.svg"


function App() {
  return(
    <div className="global">
      <div className="sidebar">
        <img src={film} className="side1"/>
        <img src={bxl} className="side"/>
        <img src={tv} className="side"/>
        <img src={movie} className="side"/>
        <img src={imag} className="sid"/>
      </div>
      <div className="movie">
        <div className="search"><img src={search} />
        <input type="search" placeholder="Search for Movies or TV Series" />
        </div>      
        <h1 className="head">Trending Movies</h1>
        <div className="trading">                
          <MTranding Img={img}/> 
          <MTranding Img={img}/>
          <MTranding Img={img}/>       
        </div>
        <h2 className="head2">Recommanded for you</h2>
        <div className="newM">
          <NewMovi 
          Pic={pic}
          parag={"The Great Land"}
          /> 
          <NewMovi 
          Pic={pic1}
          parag={"Business Insider"}
          /> 
          <NewMovi 
          Pic={pic2}
          parag={"Guess The Name"}
          />
          <NewMovi 
          Pic={pic3}
          parag={"Names of Love"}
          />      
        </div>
        <div className="newMovi">
          <NewMovie 
          Imge={imgs}
          para={"During The Hunt"}
          />
          <NewMovie 
          Imge={imgs1}
          para={"Some Answer"}
          />
          <NewMovie 
          Imge={imgs2}
          para={"Hunt for the people"}
          />
          <NewMovie 
          Imge={imgs3}
          para={"Earth's Unlocked"}
          />           
        </div>      
      </div>    
    </div>
  )
}
export default App