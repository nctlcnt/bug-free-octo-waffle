import React from 'react'
import { Layout } from '../components'
import { ShowcaseItem } from '../components'
import styles from '../styles/Home.module.scss'

export const getStaticProps = async () => {
  return {
    props: {
      isHome: true,
      items: [
        {
          title: 'Item 1',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste, aperiam iusto nostrum numquam cum expedita voluptate rem explicabo temporibus architecto ullam? Optio nesciunt mollitia fugiat sit molestias sequi! Provident?',
        },
        {
          title: 'Item 2',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste, aperiam iusto nostrum numquam cum expedita voluptate rem explicabo temporibus architecto ullam? Optio nesciunt mollitia fugiat sit molestias sequi! Provident?',
        },
        {
          title: 'Item 3',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste, aperiam iusto nostrum numquam cum expedita voluptate rem explicabo temporibus architecto ullam? Optio nesciunt mollitia fugiat sit molestias sequi! Provident?',
        },
      ],
    },
  }
}

export default ({ items }) => {
  return (
    <>
      <section>
        <div className={styles.firstSectionPadding}></div>
        <h1 className="font-mono text-4xl font-bold">Something I built...</h1>
        <p className="pt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste,
          aperiam iusto nostrum numquam cum expedita voluptate rem explicabo
          temporibus architecto ullam? Optio nesciunt mollitia fugiat sit
          molestias sequi! Provident?
        </p>
        <div className={styles.firstSectionPadding}></div>
      </section>
      <section>
        {items.map((item, index) => (
          <ShowcaseItem item={item} key={index} />
        ))}
      </section>
    </>
  )
}
