// Write your JS code here

const Header = () => (
  <nav className="nav-bar">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="website-logo"
    />
    <ul type="none" className="nav-details">
      <li className="nav-item">Home</li>
      <li className="nav-item">Products</li>
      <li className="nav-item">Cart</li>
      <li>
        <button className="nav-item logout-button" type="button">
          Logout
        </button>
      </li>
    </ul>
  </nav>
)

export default Header
