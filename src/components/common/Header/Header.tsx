import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const  links:{label:string, path:string}[] = [{
    label:"Acceuil",
    path:"/home-page",
},
    {
        label: "Collection",
        path: "/collection"
    },
    {
        label: "Shop",
        path: "/shop"
    }
]


const Header = () => {
    const router = useLocation();
  return (
      <header className="w-full top-0 h-20 flex justify-center items-center bg-blue-50">
          <ul className="flex justify-between gap-10">
              { links.map((link:{label:string, path:string}, index:number) => (
                  <li key={index} ><Link to={link.path} className={`${router.pathname === link.path ? "!text-red-700" : "!text-blue-700" }`}>{link.label}</Link></li>
              ))}
          </ul>
      </header>
  )
}
export default Header;