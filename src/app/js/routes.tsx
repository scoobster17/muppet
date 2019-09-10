import * as React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import HomePage from './pages/home';
import AddModal from './pages/add';


/**
 *
 * @constructor
 */
export default function Routes() {
  return (
    <>
      <Route path='/' render={ () => <DefaultLayout><HomePage /></DefaultLayout> } />
      <Route path='/add' render={ () => <AddModal /> } />
      <Redirect to='/' />
    </>
  );
}

/**
 *
 * @constructor
 */
function DefaultLayout(props: { children: JSX.Element }): JSX.Element {
  return (
    <>
      <Header />
      { props.children }
    </>
  );
}

/**
 *
 * @constructor
 */
function Header(): JSX.Element {
  return (
    <header className='global-header'>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/add'>Add</Link></li>
        </ul>
      </nav>
    </header>
  );
}
