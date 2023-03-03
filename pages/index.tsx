import React, { useState } from 'react'
import { Header, Layout } from '../components'
import { ShowcaseItem } from '../components'
import useWindowDimensions from '../lib/useWindowDimensions'
import styles from '../styles/Home.module.scss'

export const getStaticProps = async () => {
  return {
    props: {
      isFull: true,
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
  const { height, width } = useWindowDimensions()
  const [positionY, setPositionY] = useState(0)
  const [disabled, setDisabled] = useState(false)

  const handleScroll = (direction) => {
    if (disabled) return
    setDisabled(true)
    setPositionY((prev) => prev + direction * height)
    setTimeout(() => {
      setDisabled(false)
    }, 1000)
  }

  return (
    <div className="overflow-hidden">
      <Header className="absolute"></Header>
      <div
        style={{
          transition: 'all 1000ms ease 0s',
          transform: `translate3d(0px, ${positionY}px, 0px)`,
        }}
        className="h-screen w-screen"
      >
        <section className="flex flex-row h-screen w-screen pt-10">
          <button onClick={() => handleScroll(-1)} disabled={disabled}>
            12334
          </button>
          <div className="h-full w-9/12">
            <div>1</div>
          </div>
          <div className="h-full pt-10">
            <div>2</div>
            <div>3</div>
          </div>
        </section>
        <section className="flex flex-row h-screen w-screen pt-10">
          <div className="h-full w-9/12">
            <div>1</div>
            <button onClick={() => handleScroll(-1)} disabled={disabled}>
              12334
            </button>
            <button onClick={() => handleScroll(1)} disabled={disabled}>
              opoiuu
            </button>
          </div>
          <div className="h-full pt-10">
            <div>2</div>
            <div>3</div>
          </div>
        </section>
        <section className="flex flex-row h-screen w-screen pt-10 overflow-x-auto">
          <div className="h-full w-9/12 shrink-0">
            <div>1</div>
            <button onClick={() => handleScroll(1)} disabled={disabled}>
              opoiuu
            </button>
          </div>
          <div className="h-full pt-10 w-9/12 shrink-0">
            <div>2</div>
            <div>3</div>
          </div>
          <div className="h-full pt-10 w-9/12 shrink-0">
            <div>2</div>
            <div>3</div>
          </div>
        </section>
      </div>
    </div>
  )
}
