import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styles';
//import * as S from './styles';

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='joque com sua turma' />
    </Container>
  );
}
