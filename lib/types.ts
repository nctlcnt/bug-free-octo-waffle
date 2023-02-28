import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
export type BlogItemDataType = {
  id: string
  title: string
  date: string
  description?: string
  img?: string
  width?: number
  category?: string
} & {
  setLoaded: Function
}

export type { GetStaticProps, GetStaticPaths, GetServerSideProps }
