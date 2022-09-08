import Head from 'next/head';
import styled from "styled-components";

const Hetsh = styled.h1` font-size: 60px; color: red; `;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hetsh>Home</Hetsh>
    </div>
  );
};
