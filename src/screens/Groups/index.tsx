import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { Container } from './styles';
import { useState } from 'react';
import { FlatList } from 'react-native/types';
//import * as S from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocket']);

  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='joque com sua turma' />

      <GroupCard title='Galera do Ignite' />
    </Container>
  );
}
