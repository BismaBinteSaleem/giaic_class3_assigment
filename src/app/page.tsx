import Image from "next/image";
import Footer from "../components/footer"
import Header from "../components/header";
export default function Portfolio () {
  return (
    <div>
      <Header/>
    <div className = "Container">
      <div  className = "childContainer">
        <h1>Introduction</h1>
        <p> I am Bisma Saleem,<br>
        </br>a front-end developer focused on creating user-friendly websites with HTML, CSS, and JavaScript.</p>
      </div>
      <div className="imageContainer"> 
        <Image src="/images/myImage.png" alt="girlImage"width={300} height={300}/>
      </div>
    </div>
    <Footer/>
    </div>
  )
};
