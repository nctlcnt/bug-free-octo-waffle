import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Header, Layout } from '../components'
import { ShowcaseItem } from '../components'
import useWindowDimensions from '../lib/useWindowDimensions'
import styles from '../styles/Home.module.scss'

export const getStaticProps = async () => {
  return {
    props: {
      isHome: true,
    },
  }
}

export default ({ items }) => {
  return (
    <div className="grow flex h-screen bg-[#6c8ec3]">
      <div className="w-2/3 h-full flex flex-wrap">
        <section className="w-full h-1/2">
          <div className="w-full h-full flex justify-center text-left flex-col p-5 text-stone-200">
            <h1 className="font-bold text-5xl font-mono block">Hello!</h1>
            <h2 className="font-bold text-2xl font-mono block">
              I'm a front-end engineer with multiple years development
              experience of commercial web application.
            </h2>
          </div>
        </section>
        <section className="w-1/2 h-1/2 p-2 inline-block relative">
          <Link href={'/blogs/other'}>
            <div className="w-full h-full">
              <span
                className=" text-white bottom-1 left-2 absolute font-mono font-bold"
                style={{ fontSize: '6rem' }}
              >
                Other
              </span>
            </div>
          </Link>
        </section>
        <section className="w-1/2 h-1/2 p-2 inline-block relative">
          <Link href={'/blogs/about'}>
            <div className="w-full h-full">
              <span
                className=" text-white bottom-1 left-2 absolute font-mono font-bold"
                style={{ fontSize: '6rem' }}
              >
                About
              </span>
            </div>
          </Link>
        </section>
      </div>
      <section className="w-1/3 p-1">
        <div className=" w-full h-full rounded-md p-2">
          <div
            className=" w-full h-full border border-yellow-50 rounded-md"
            style={{
              background: 'url(/images/pngegg.png) center',
              backgroundSize: 'cover',
            }}
          ></div>
        </div>
      </section>
    </div>
  )
}
