import React from 'react';

import SearchForm from '../search-form/search-form.component';

import { HeaderStyled, BrandStyled } from './header.styles';

const Header = ({ title }) => (
  <HeaderStyled>
    <BrandStyled to={'/'}>{title}</BrandStyled>
    <SearchForm />
  </HeaderStyled>
);
export default Header;
