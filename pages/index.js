import Head from "next/head";
import styled from 'styled-components';
import { color } from '../utilities'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to Next Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading> Sign up for the latest location lunches, offers and new</Heading>
    </div>
  );
}

const Heading = styled.h3`
color: ${color.grey_700};

`;