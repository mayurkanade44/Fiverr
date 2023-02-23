import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

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
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="text">Fiverr</span>
          <span className="dot">.</span>
        </div>
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
                      <span>Gigs</span>
                      <span>Add New Gig</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>test</span>
            <span>test1</span>
          </div>
        </>
      )}
    </div>
  );
};
export default Navbar;
