import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card';
// import styles from '../styles/Home.module.css'
import { getDataFromList } from '../libs/google_sheet';

export default function IndexPage({ main }) {
  const sorted = main.sort((a,b) => b.wins - a.wins)

  const cards= sorted.map(item => <Card
    key={item.name}
    name={item.name}
    wins={item.wins}
    loses={item.loses}
    nc={item.nc}
    prevChamp={item.prevChamp} /
    >)


  return (
    <>
      <Head>
        <title>Balls of Fury</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <main>
        <h1>Balls of Fury</h1>
        <h2>September championship</h2>
        {cards}
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const main = await getDataFromList();
  return {
    props: {
      main: main.slice(1, main.length), // remove sheet header
    },
    revalidate: 1, // In seconds
  };
}
