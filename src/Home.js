import styles from './Home.module.css';
import Calculadora from './components/calculator/Calculator';
import Container from './components/container/Container';

export default function Home() {
   return (
      <div className={ styles.home_container }>
         <Container>
            <Calculadora />
         </Container>
      </div>
   );
}