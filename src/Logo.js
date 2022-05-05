import React from 'react';
import {
  Image,
  keyframes,
  usePrefersReducedMotion,
  Flex,
} from '@chakra-ui/react';
import logo from './logo.svg';
import csslogo from './components/svg/css3.svg';
import gitlogo from './components/svg/git.svg';
import htmllogo from './components/svg/html5.svg';
import jslogo from './components/svg/js.svg';
import reactlogo from './components/svg/react.svg';

const spin = keyframes`
  from { transform:  rotate(0deg); }
  to { transform:  rotate(360deg); }
`;

export const Logo = props => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin}  infinite 15s linear`;

  return (
    <Flex
      display="flex"
      flexDir="row"
      justifyContent="space-evenly"
      w="90vw"
      h="70vh"
      zIndex="hide"
      bgColor="red"
      mt="5rem"
    >
      <Image animation={animation} src={logo} {...props} />
      <Image animation={animation} src={csslogo} {...props} mt="10%" />
      <Image animation={animation} src={gitlogo} {...props} mt="14%" />
      <Image
        animation={animation}
        src={htmllogo}
        {...props}
        mt="30%"
        mr="12%"
      />
      <Image
        animation={animation}
        src={reactlogo}
        {...props}
        mt="25%"
        mr="10%"
      />
      <Image animation={animation} src={jslogo} {...props} mt="20%" />
    </Flex>
  );
};
