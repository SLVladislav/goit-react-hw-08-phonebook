import homeBg from '../images/homeBg.jpg';
import {
  ContainerWrapper,
  Title,
} from '../components/styles/common/Container.styled';

function HomePage({ children, title }) {
  return (
    <Container>
      <img src={homeBg} alt="Phone book" />
      <ContainerWrapper>
        {title && <Title>{title}</Title>}
        {children}
      </ContainerWrapper>
    </Container>
  );
}

export default HomePage;
