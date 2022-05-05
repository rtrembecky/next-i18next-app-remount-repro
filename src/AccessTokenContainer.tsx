import { useState } from "react"
import { createContainer } from "unstated-next"

// access token global state
const useAccessToken = (initialValue?: string) => {
  const [accessToken, setAccessToken] = useState(initialValue || "")
  return { accessToken, setAccessToken }
}
export const AccessTokenContainer = createContainer(useAccessToken)
