import styled from "styled-components";

const Container = styled.div`
/* height: 30px; */
background-color: teal;
color: white;
/* display: flex; */
/* align-items: center; */
/* justify-content: center; */
/* font-size: 1rem; */
`
const H3 = styled.h3`
  font-size: 1rem;
  padding: 5px 0;
  text-align: center;
`;

const Announcement = () => {
  return (
    <Container>
      <H3>
        Limited Offer ! Free Shipping on Orders Over $50
      </H3>
    </Container>
  )
}

export default Announcement