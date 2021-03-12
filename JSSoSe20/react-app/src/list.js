import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  background-color: black;
  color: white;
`;

export const List = ({ name }) => {
  const data = `foo ${name} bar baz`;

  function handleClick() {}

  return <Div onClick={handleClick}>Hello {name}</Div>;
};

List.propTypes = {
  name: PropTypes.string.isRequired,
};
