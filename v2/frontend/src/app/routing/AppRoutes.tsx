 import {FC} from 'react'
 import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
 import {shallowEqual, useSelector} from 'react-redux'
 import {PrivateRoutes} from './PrivateRoutes'
 import {ErrorsPage} from '../modules/errors/ErrorsPage'
 import {Logout, AuthPage} from '../modules/auth'
 import {RootState} from '../../setup'
 import {App} from '../App'
 
 const {PUBLIC_URL} = process.env
 
 const AppRoutes: FC = () => {
   const isAuthorized = useSelector<RootState>(({auth}) => auth.user, shallowEqual)
   return (
     <BrowserRouter basename={PUBLIC_URL}>
       <Routes>
         <Route element={<App />}>
           <Route path='error/*' element={<ErrorsPage />} />
           <Route path='logout' element={<Logout />} />
           {isAuthorized ? (
             <>
               <Route path='/*' element={<PrivateRoutes />} />
               <Route index element={<Navigate to='/dashboard' />} />
             </>
           ) : (
             <>
               <Route path='auth/*' element={<AuthPage />} />
               <Route path='*' element={<Navigate to='/auth' />} />
             </>
           )}
         </Route>
       </Routes>
     </BrowserRouter>
   )
 }
 
 export {AppRoutes}
 