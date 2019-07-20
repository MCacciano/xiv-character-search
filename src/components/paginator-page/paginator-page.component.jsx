import React from 'react';

import { PageStyled } from './paginator-page.styles';

const Page = (page, ...props) => {
  return (
    <PageStyled page={page} {...props}>
      {page}
    </PageStyled>
  );
};

export default Page;
