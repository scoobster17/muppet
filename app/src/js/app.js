// styles: webpack watches and compiles sass due to this line
import style from '../css/style.scss';

// React dependencies
import React from 'react';
import { render } from 'react-dom';

// App dependencies
import routes from './config/routes';

render(routes, document.getElementById('container'));