import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  
  const { pathname } = useLocation();

  const menuLinks = [
    {
      id: 1,
      name: "Graphic & Design",
      link: "/",
    },
    {
      id: 2,
      name: "Video & Animation",
      link: "/",
    },
    {
      id: 3,
      name: "Writing & Translation",
      link: "/",
    },
    {
      id: 4,
      name: "AI Service",
      link: "/",
    },
    {
      id: 5,
      name: "Digital Marketing",
      link: "/",
    },
    {
      id: 6,
      name: "Music & Audio",
      link: "/",
    },
    {
      id: 7,
      name: "Programming & Tech",
      link: "/",
    },
  ];

  const user = {
    id: 1,
    userName: "Mayur",
    isSeller: true,
  };




  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <Link to="/" className="link">
          <div className="logo">
            <span className="text">Fiverr</span>
            <span className="dot">.</span>
          </div>
        </Link>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          {!user?.isSeller && <span>Become Seller</span>}
          {!user && <button>Join</button>}
          {user && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src="" alt="" />
              <span>{user?.userName}</span>
              {open && (
                <div className="options">
                  {user?.isSeller && (
                    <>
                      <Link className="link" to="/myGigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active ||
        (pathname !== "/" && (
          <>
            <hr />
            <div className="menu">
              {menuLinks.map((item) => (
                <Link className="link" to={item.link} key={item.id}>
                  {item.name}
                </Link>
              ))}
            </div>
          </>
        ))}
    </div>
  );
};
export default Navbar;
