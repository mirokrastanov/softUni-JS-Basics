import { page } from './node_modules/page/page.mjs';
import { html, render } from './node_modules/lit-html/lit-html.js';
import { catalogPage } from './src/views/catalog.js';
import { createPage } from './src/views/create.js';
import { detailsPage } from './src/views/details.js';
import { editPage } from './src/views/edit.js';
import { loginPage } from './src/views/login.js';
import { registerPage } from './src/views/register.js';
import { myFurniturePage } from './src/views/myFurniture.js';
import * as api from './src/api/api.js';

page('/', catalogPage);
page('/catalog', catalogPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/login', loginPage);
page('/register', registerPage);
page('/my-furniture', myFurniturePage);
page('*', catalogPage);
