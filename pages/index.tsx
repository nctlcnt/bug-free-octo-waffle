import Link from 'next/link'
import React from 'react'

export const getStaticProps = async () => {
    return {
        props: {
            isHome: true,
        },
    }
}

export default () => {
    return (
        <div className="grow flex h-screen bg-[#B0C5A4] flex-col p-5">
            <section >

                <Link href={'/blogs/all'}>
                    <div className="w-full h-full">
                          <span
                              className="text-white bottom-1 left-2 absolute font-mono font-bold"
                              style={{fontSize: '5rem',color:'#EBC49F'}}
                          >
                              Click to Enter
                          </span>
                    </div>
                </Link>

            </section>
            <section  style={{fontSize: '1rem', color: '#D37676'}}  className={'w-2/3'}>
                <p style={{fontSize: '1.5rem', color: '#F1EF99'}} className={'font-mono'}>
                    A Sample Blog Website Demonstrating Masonry Layouts with Vanilla JS in a Next.js Environment

                </p>
                <p className={'mb-4'}>This website, primarily built with Next.js, showcases how to achieve masonry
                    layouts using vanilla
                    JavaScript. The index page dynamically adds blocks for each post, automatically adjusting the layout
                    based on the content of each post. All posts are server-rendered static pages,
                    optimized for SEO.</p>
                <p className={'mb-4'}>Just drop your Markdown files into the <code>/posts</code> folder, and this
                    magical website will
                    automatically transform them into stunning, static web pages. No complex coding required!
                </p>
                <p>For posts, you can add:</p>
                <ol className={'list-inside list-decimal'}>
                    <li>
                        <b>Normal Blocks:</b> Posts with tags, images, and text content.
                    </li>
                    <li>
                        <b>Pure Image Blocks:</b> Posts consisting only of images.
                    </li>
                    <li>
                        <b>Action Blocks:</b> Posts with buttons or other custom interactive content.
                    </li>
                </ol>

            </section>
        </div>
    )
}
