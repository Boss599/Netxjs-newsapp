import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";

export default function Home({ articles }) {
  return (
    <PageLayout title="NewApp -Home">
      <div className={styles.container}>
        {articles.length === 0 && <p>No tenemos articulos</p>}
        {articles.length > 0 &&
          articles.map((article, index) => (
            <div key={index}>
              <img
                alt={`Image for the article ${article.title}`}
                src={article.urlToImage}
              />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          ))}
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2022-09-25&sortBy=publishedAt&apiKey=567bde45428f419b9c39cdac170b47ba"
  );
  const { articles } = await response.json();
  return {
    props: {
      articles,
    },
  };
}
