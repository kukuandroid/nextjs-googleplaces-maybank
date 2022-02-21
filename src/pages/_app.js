import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { useStore } from '../redux/store'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../utils/emotion-cache'
import '../styles/global.css'

const clientSideEmotionCache = createEmotionCache()

export default function App ({ Component, pageProps, emotionCache }) {
  const store = useStore(pageProps.initialReduxState)
  emotionCache = clientSideEmotionCache

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <Component {...pageProps} />
        </StyledEngineProvider>
      </CacheProvider>
    </Provider>
  )
}

App.propTypes = {
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object
}
