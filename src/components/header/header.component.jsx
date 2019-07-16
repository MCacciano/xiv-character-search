import React from 'react';

import { HeaderStyled } from './header.styles';

const Header = ({ title }) => <HeaderStyled to={'/'}>{title}</HeaderStyled>;
export default Header;
