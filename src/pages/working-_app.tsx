import { AppProps } from "next/app"
import { appWithTranslation } from "next-i18next"
import { FC } from "react"

import { AccessTokenContainer } from "src/AccessTokenContainer"

const App: FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />

// doesn't wrap whole app because it causes remounts on route change - probably a bug: https://github.com/isaachinman/next-i18next/issues/1075
const TranslatedApp = appWithTranslation(App)

const EnhancedApp: FC<AppProps> = (props) => {
  return (
    <AccessTokenContainer.Provider>
      <TranslatedApp {...props} />
    </AccessTokenContainer.Provider>
  )
}

export default EnhancedApp
