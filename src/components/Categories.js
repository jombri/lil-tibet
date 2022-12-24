import React from 'react';
import styled from 'styled-components';
import { categories } from '../merchData';
import CategoryItem from './CategoryItem';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    `;

const Title = styled.h2`
    font-size: clamp(1.5rem, 4vw, 3rem);
    margin: 2rem 0;
    `

const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-bottom: 5rem;
    gap: 3rem;
    `

const Categories = () => {
  return (
    <Container className='wrapper'>
        <Title>Featured Categories</Title>
        <CategoryContainer>
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
                ))}
        </CategoryContainer>
    </Container>
  )
};

export default Categories;