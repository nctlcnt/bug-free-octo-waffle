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
    <div className="grow flex flex-wrap h-screen bg-[#6c8ec3]">
      <div className="w-2/3 h-full">
        <section className="w-full h-1/2">
          <div className="w-full h-full flex justify-center text-left flex-col p-5 text-stone-200">
            <h1 className="font-bold text-5xl font-mono block">Hello!</h1>
            <h2 className="font-bold text-2xl font-mono block">
              I'm a front-end engineer with multiple years development
              experience of commercial web application.
            </h2>
          </div>
        </section>
        <section className="w-1/2 h-1/2 pr-1 inline-block">
          <Link href={'/blogs/all'}>
            <div className=" w-full h-full  bg-yellow-500 rounded-md p-2">
              <div className=" w-full h-full border border-yellow-50 rounded-md">
                Blog
              </div>
            </div>
          </Link>
        </section>
        <section className="w-1/2 h-1/2 pl-1 inline-block">
          <div className=" w-full h-full  bg-yellow-500 rounded-md p-2">
            <div className=" w-full h-full border border-yellow-50 rounded-md">
              123
            </div>
          </div>
        </section>
      </div>
      <section
        className="w-1/3 p-1"
        style={{ background: "url('/images/cloud.jpg')" }}
      ></section>
    </div>
  )
}
