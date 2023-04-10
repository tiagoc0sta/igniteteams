import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { Container } from './styles';
//import * as S from './styles';

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='joque com sua turma' />

      <GroupCard title='Galera do Ignite' />
    </Container>
  );
}
