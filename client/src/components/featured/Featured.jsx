import "./Featured.scss";


const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the perfect freelance services for your business.</h1>
          <div className="search">
            <div className="searchInput">
              <img src="./images/search.png" alt="search" />
              <input type="text" placeholder="Try building mobile app" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Word Press</button>
            <button>AI Service</button>
            <button>Logo Design</button>
          </div>
        </div>
        <div className="right">
          <img src="./images/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Featured;
