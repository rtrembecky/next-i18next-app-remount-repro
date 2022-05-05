import { AppProps } from "next/app"
import { appWithTranslation } from "next-i18next"
import { FC } from "react"

import { AccessTokenContainer } from "src/AccessTokenContainer"

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AccessTokenContainer.Provider>
      <Component {...pageProps} />
    </AccessTokenContainer.Provider>
  )
}

export default appWithTranslation(App)
