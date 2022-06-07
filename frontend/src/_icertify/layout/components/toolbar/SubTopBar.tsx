import clsx from 'clsx'
import {useLayout} from '../../core'
import SubTopNavigation  from '../header/SubTopNavigation'

const SubTopBar = () => {
  const {classes} = useLayout()

  return (
    <div className='toolbar' id='kt_toolbar'>
      <div id='kt_toolbar_container' className={clsx(classes.toolbarContainer.join(' '), 'd-flex flex-stack')}>
      <div className='d-flex align-items-center'>
        <SubTopNavigation />
        </div>
      </div>
    </div>
  )
}

export default SubTopBar
