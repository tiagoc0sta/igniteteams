import { TextInputProps } from 'react-native';

import { Container } from './styles';

export function Input({ ...rest }: TextInputProps) {
  // prettier-ignore
  return (
    <Container {...rest} />
    
  );
}
