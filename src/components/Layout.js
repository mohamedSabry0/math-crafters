import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => (
  <>
    <nav>
      <h1 className="heading">Math Crafters</h1>
      <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="calculator">
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink to="quote">
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>

);

export default Layout;
