import Link from "next/link"


export default function Footer(){
    return(
        <div className="footerContainer">
            <div className="buttonArea">
            <ul className="childfooter">
            <Link href={"/"}>   
                <li> Portfolio</li></Link>
            <Link href={"about-us"}>
                <li>About us</li></Link>

            <Link href={"/contact us"}>    
                <li>Contact us</li></Link>
                
            </ul>
            <h4>2024 Bisma Saleem. All Rights Reserved</h4>
            </div>
        </div>
    )
}