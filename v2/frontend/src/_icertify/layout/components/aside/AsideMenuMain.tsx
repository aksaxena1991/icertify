/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'


import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      
      <AsideMenuItem to='/courses' title='Courses' icon='/media/icons/duotune/finance/fin010.svg'/>
      <AsideMenuItem to='' title='Ratings' icon='/media/icons/duotune/finance/fin010.svg'/>
      <AsideMenuItem to='' title='Announcements' icon='/media/icons/duotune/finance/fin010.svg'/>
      <AsideMenuItem to='' title='Q&A' icon='/media/icons/duotune/finance/fin010.svg'/>
      <AsideMenuItem to='' title='Messages' icon='/media/icons/duotune/finance/fin010.svg'/>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div>
      <AsideMenuItem to='' title='Promotions' icon='/media/icons/duotune/finance/fin010.svg'/>
      <AsideMenuItem to='' title='Traffic & Conversions' icon='/media/icons/duotune/finance/fin010.svg'/>
      <AsideMenuItem to='' title='Revenue' icon='/media/icons/duotune/finance/fin010.svg'/>
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
      
    </>
  )
}
