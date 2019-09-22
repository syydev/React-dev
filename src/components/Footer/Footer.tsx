import React from 'react';
import styled from 'styled-components';
import { footerHeight } from '../../utils/GlobalStyles';

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <AppFooter>
        <FooterItem>
          <Title>About Us</Title>
          <Content>
            <p>동국대학교 컴퓨터공학과<br />
              소프트웨어공학개론[CSE4058]<br />
              Project Name: 0-9 BOX</p>
            <p>Copyright &copy; {new Date().getFullYear()} All rights reserved<br />
              This project is made with by <a href="https://github.com/SeungyoungYang/React-dev" target="_blank">OKY</a></p>
          </Content>
        </FooterItem>
        <FooterItem>
          <Title>Location</Title><br />
          <Content>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.871474015152!2d126.99602911531147!3d37\
            .55809177979953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca302befa0c31%3A0x56e51c74b1946e96!2z7IS\
            c7Jq47Yq567OE7IucIO2VhOuPmSDrj5nqta3rjIDtlZnqtZAg7Iug6rO17ZWZ6rSA!5e0!3m2!1sko!2skr!4v1542084648851"
              width="280" height="200">동국대학교 신공학관</iframe>
          </Content>
        </FooterItem>
        <FooterItem>
          <Title>Contact Us</Title>
          <Content>
            <p><strong>[ Team OKY ]</strong></p>
            <p>김성백<br /><br />
              양승영<br /><br />
              오주연</p>
          </Content>
        </FooterItem>
      </AppFooter>
    </React.Fragment>
  );
}

const AppFooter = styled.div`
  display: inline-table;
  bottom: 0;
  width: 100%;
  height: ${footerHeight};
  background: black;
`;

const FooterItem = styled.div`
  display: table-cell;
  width: 33%;
  text-align: center;
  vertical-align: middle;
`;

const Title = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

const Content = styled.div`
  color: white;
  font-size: 15px;
  a {
      color: red;
      text-decoration: none;
    }
`;

export default Footer;