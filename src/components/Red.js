import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Orange from './Orange';
import Yellow from './Yellow';

const Color = () => (
  <div>
        <h2 className="red">red</h2>
    <NavLink exact to='/red'>Red only</NavLink>
    <NavLink to='/red/orange'>Add orange</NavLink>
    <NavLink to='/red/yellow'>Add yellow</NavLink>

    <Route path="/red/orange" component={Orange} />
    <Route path="/red/yellow" component={Yellow} />
  </div>
);

export default Color;
