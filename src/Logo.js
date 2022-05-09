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
      minW={{
        base: '25rem',
        big: '35rem',
        bigger: '40rem',
        sm: '45rem',
        lg: '100vw',
      }}
      h={{
        base: '50vh',
        lg: '70vh',
      }}
      zIndex="hide"
      mt="5rem"
    >
      <Image animation={animation} src={logo} {...props} />
      <Image
        animation={animation}
        src={csslogo}
        {...props}
        mt={{ base: '55%', lg: '10%' }}
      />
      <Image
        animation={animation}
        src={gitlogo}
        {...props}
        mt={{ base: '75%', lg: '14%' }}
      />
      <Image
        animation={animation}
        src={htmllogo}
        {...props}
        mt={{ base: '85%', lg: '30%' }}
        mr={{ base: '10%', lg: '12%' }}
      />
      <Image
        animation={animation}
        src={reactlogo}
        {...props}
        mt={{ base: '90%', lg: '30%' }}
        mr={{ base: '25%', lg: '10%' }}
      />
      <Image
        animation={animation}
        src={jslogo}
        {...props}
        mt={{ base: '45%', lg: '20%' }}
        mr={{ base: '5%', lg: '0%' }}
      />
    </Flex>
  );
};
