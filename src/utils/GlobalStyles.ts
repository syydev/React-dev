import styled from 'styled-components';
import { Link } from 'react-router-dom';

const headerHeight = '50px';
const footerHeight = '350px';

const ButtonRed = styled.button`
  background: rgb(240, 0, 0);
  color: white;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 17px;
  border: none;
  border-radius: 4px;
  &:hover {
    background: rgb(200, 0, 0);
  }
`;

const LinkButtonRed = styled(Link)`
  background: rgb(240, 0, 0);
  color: white;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  &:hover {
    background: rgb(200, 0, 0);
  }
`;

export {
  headerHeight,
  footerHeight,
  ButtonRed,
  LinkButtonRed,
};