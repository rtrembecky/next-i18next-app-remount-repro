import { GetServerSidePropsContext, GetServerSidePropsResult, GetStaticPropsContext, GetStaticPropsResult } from "next"
import { ParsedUrlQuery } from "querystring"

type AssertedLocale = { locale: string }

// copied GetStaticProps and GetServerSideProps from next and asserted context.locale as string

export type GetStaticPropsWithLocale<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
> = (context: GetStaticPropsContext<Q> & AssertedLocale) => Promise<GetStaticPropsResult<P>>

export type GetServerSidePropsWithLocale<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
> = (context: GetServerSidePropsContext<Q> & AssertedLocale) => Promise<GetServerSidePropsResult<P>>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GetServerSidePropsResult = GetServerSidePropsResult<{ [key: string]: any }>
