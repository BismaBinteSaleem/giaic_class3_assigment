import Link from "next/link"

export default function Header(){
    return(
        <div className="headerContainer">
            <div className="buttonArea">
            <ul className="childHeader">
            <Link href={"/"}>
                <li> Portfolio</li> </Link>
            <Link href={"/about-us"}>
                <li>About us</li></Link>
             <Link href={"/contact-us"}>    
                <li>Contact us</li></Link>
                
            </ul>
            </div>
        </div>
    )
}