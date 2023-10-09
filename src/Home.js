import styles from './Home.module.css';
import Calculator from './components/calculator/Calculator';
import Container from './components/container/Container';

export default function Home() {
   return (
      <div className={ styles.home_container }>
         <Container>
            <Calculator />
         </Container>
      </div>
   );
}