import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {I18nProvider} from '../_icertify/i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from '../_icertify/layout/core'
import {MasterInit} from '../_icertify/layout/MasterInit'
import AuthInit from './modules/auth/redux/AuthInit'

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <AuthInit>
            <Outlet />
            <MasterInit />
          </AuthInit>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export {App}
