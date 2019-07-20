import React from 'react';

import { CustomButtonStyled } from './custom-button.styles';

const CustomButton = ({
  children,
  onButtonClick,
  doRedirect,
  ...otherProps
}) => {
  return (
    <CustomButtonStyled onClick={onButtonClick} {...otherProps}>
      {children}
    </CustomButtonStyled>
  );
};

export default CustomButton;
