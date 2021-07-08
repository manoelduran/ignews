import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from '../pages/home.module.scss';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: string;
  }
}
export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.Container}>
        <section className={styles.Content}>
          <span>👏Hey, welcome</span>
          <h1>News About the <span>React</span> world</h1>
          <p>Get acess to all the publics <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/avatar.svg" alt="girls coding" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IvoBeLkzp6ZLydP3dLahfgz')
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100), // sempre em centavos
  }
  return {
    props: {
      product,
    },
    revalidate: (60 * 60 * 24), // 24 horas em segundos ( 60s * 60 min * 24)
  }
}
