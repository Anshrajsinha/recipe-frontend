import { Link } from "react-router-dom"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

export const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"])
  const navigate = useNavigate()
  const logout = () => {
    setCookie("cookie-name", "")
    navigate("/auth")
  }
    return (
        <div className="navbar">
          <Link to="/" >Home</Link>
          <Link to="/create" >Create</Link>
          <Link to="/saved" >Saved</Link>
          {!cookies["cookie-name"] ? (
            <Link to="/auth" >Login/Register</Link>
          ) : (
            <button onClick={logout}>Logout</button>
          )}
        </div>
    )
}