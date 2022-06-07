import  {FC} from 'react'
import {PageTitle} from '../../../_icertify/layout/core'
import {PageBuilder} from './PageBuilder'

const PageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Courses</PageTitle>
      <PageBuilder />
    </>
  )
}

export default PageWrapper
