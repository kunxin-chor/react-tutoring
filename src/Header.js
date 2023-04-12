// A JSX component has three criteria
// 1. it's a function
// 2. return JSX
// 3. The first alphabet of the function name is uppercase
function Header() {
    return (<nav className="navbar navbar-expand-sm bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Link 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link 3</a>
          </li>
        </ul>
      </div>
    </nav>)
  }

  export default Header;