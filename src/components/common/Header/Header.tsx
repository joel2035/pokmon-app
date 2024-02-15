import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const  links:{label:string, path:string}[] = [{
    label:"Acceuil",
    path:"/home-page",
},
    {
        label: "Collection",
        path: "/collection"
    }
]


const Header = () => {
    const router = useLocation();
  return (
      <header>
          <ul>
              { links.map((link:{label:string, path:string}, index:number) => (
                  <li key={index} ><Link to={link.path} className={`${router.pathname === link.path ? "!text-red-700" : "!text-blue-700" }`}>{link.label}</Link></li>
              ))}
          </ul>
      </header>
  )
}
export default Header;