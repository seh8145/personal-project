import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 40px;
  margin: 20px 10;
  position: fixed;
  left: 0;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: lightblue;
  gap : 20px;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  color: white;
`;

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
        <Link to="/travelplace">인기 여행지</Link>
        <Link to="/360view">360도 뷰</Link>
        <Link to="/local-information">현지 정보</Link>
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
        <Link to="/review">사용자 리뷰</Link>
        <Link to="/contact">연락처</Link>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;