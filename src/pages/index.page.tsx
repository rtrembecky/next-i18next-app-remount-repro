import { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { AccessTokenContainer } from "src/AccessTokenContainer"
import { GetStaticPropsWithLocale } from "src/ssr"

const Home: NextPage = () => {
  const { t } = useTranslation("common")

  const router = useRouter()

  const { setAccessToken, accessToken } = AccessTokenContainer.useContainer()

  const setContext = () => setAccessToken("1234")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={setContext}>Set context</button>

      <span style={{marginTop: "16px"}}>Global access token: {accessToken ? "✅" : "❌"}</span>

      {/* example taken and adjusted from: https://github.com/isaachinman/next-i18next/blob/master/examples/simple/pages/index.js */}
      <Link href={"/"} locale={router.locale === "en" ? "de" : "en"} passHref>
        <button style={{marginTop: "16px"}}>{t("btn_change_locale")}</button>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticPropsWithLocale = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
})

export default Home
