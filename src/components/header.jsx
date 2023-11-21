

function Header() {
  return (
    <header>
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img
            src="images/logo.png" // Assuming the logo.png is in the public directory
            alt="RedStorelogo"
            width="125px"
          />
        </div>
        <nav>
          <ul id="MenuItems">
            <li><a href="http://localhost:3000/" className="navitems">Home</a></li>
            <li><a href="http://localhost:3000/" className="navitems">Products</a></li>
            <li><a href="http://localhost:3000/" className="navitems">About</a></li>
            <li><a href="http://localhost:3000/" className="navitems">Contact</a></li>
            <li><a href="http://localhost:3000/" className="navitems">Account</a></li>
          </ul>
        </nav>
        <img
          src="images/cart.png" // Assuming cart.png is in the public directory
          alt="Addtocartbutton"
          width="30px"
          height="30px"
          className="cartbtn"
        />
        <img
          src="images/menu.png" // Assuming menu.png is in the public directory
          alt=""
          width="30px"
          height="30px"
          className="menu-icon"
          onClick={menutoggle}
        />
      </div>

     
    </div>
    </header>
  );
}

function menutoggle() {
  // Implement your menu toggle logic here
}

export default Header;
