import { GetStaticProps } from 'next';
import Head from 'next/head';
import * as prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Creating a Monorepo with Lorena & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat maxime eaque dolorum nihil. Corporis sapiente mollitia sunt odit inventore non ipsam sed cum magni. Assumenda, tenetur! Perspiciatis cumque esse doloribus!</p>
          </a>

          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Creating a Monorepo with Lorena & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat maxime eaque dolorum nihil. Corporis sapiente mollitia sunt odit inventore non ipsam sed cum magni. Assumenda, tenetur! Perspiciatis cumque esse doloribus!</p>
          </a>

          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Creating a Monorepo with Lorena & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat maxime eaque dolorum nihil. Corporis sapiente mollitia sunt odit inventore non ipsam sed cum magni. Assumenda, tenetur! Perspiciatis cumque esse doloribus!</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismicClient = getPrismicClient();

  const response = await prismicClient.get({
    predicates: [prismic.predicate.at('document.type', 'post')],
    fetch: ['post.title', 'post.content'],
    pageSize: 100
  });

  console.log(response);

  return {
    props: {}
  };
};
