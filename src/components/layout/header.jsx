import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: rgba(128, 128, 128, 0.2); // 배경색을 투명하게 설정
  color: white;
`;

const NavContainer = styled.nav`
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  margin: 0 15px;
  color: black;
  text-decoration: none;
`;

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // 검색 로직을 여기에 추가하세요
    console.log("Searching for: ", searchTerm);
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <img src="logo.png" alt="Logo" />
      </Link>
      <NavContainer>
        <StyledLink to="/travelplace">인기 여행지</StyledLink>
        <StyledLink to="/360view">360도 뷰</StyledLink>
        <StyledLink to="/local-information">현지 정보</StyledLink>
        <FormContainer onSubmit={handleSearchSubmit}>
          <input
            className="search-input"
            type="search"
            placeholder="무엇을 찾고 계신가요?"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit">검색</button>
        </FormContainer>
        <StyledLink to="/reviews" >사용자 리뷰</StyledLink>
        <StyledLink to="/contact">연락처</StyledLink>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;