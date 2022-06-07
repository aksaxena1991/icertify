/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getLayout, ILayout } from '../../../../_icertify/layout/core'
import CourseLandingTab from '../../../pages/tabs/CourseLandingTab';
import PracticeTestTab from '../../../pages/tabs/PracticeTestTab';
import { createCourseDetail } from '../services/course-details.service';
import { updateCourse } from '../services/course.service';
const CourseDetails = () => {
  const [tab, setTab] = useState('Course Landing')
  const [config, setConfig] = useState<ILayout>(getLayout())
  const [data,setData] = useState<any>({});
  const {state} = useLocation();

  const updateData = (fieldsToUpdate: Partial<ILayout>) => {
    const updatedData = { ...config, ...fieldsToUpdate }
    setConfig(updatedData)
  }
  const handleCallback = (childData:any) =>{
    setData(childData);
}

const onSaveHandler = () => {
  switch(data.tab) {
case 'CourseLandingTab':
  
  updateCourse(data.course.id, {courseTitle:data.courseTitle});
  const {courseSubTitle, courseDescription,courseWelcomeNote,knowledgeArea,courseImage, course:{id,vendorId}} = data;
createCourseDetail({courseSubTitle, courseDescription,courseWelcomeNote,knowledgeArea,courseId:id,vendorId, courseImage})
  break;
  }
}
  return (
    <>

      <div className='card card-custom'>
        <div className='card-header card-header-stretch overflow-auto'>
          <ul
            className='nav nav-stretch nav-line-tabs fw-bold border-transparent flex-nowrap'
            role='tablist'
          >
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, { active: tab === 'Course Landing' })}
                onClick={() => setTab('Course Landing')}
                role='tab'
              >
                Course Landing
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, { active: tab === 'Practice Test' })}
                onClick={() => setTab('Practice Test')}
                role='tab'
              >
                Practice Test
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, { active: tab === 'Students' })}
                onClick={() => setTab('Students')}
                role='tab'
              >
                Students
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, { active: tab === 'Case Study' })}
                onClick={() => setTab('Case Study')}
                role='tab'
              >
                Case Study
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, { active: tab === 'Pricing & Coupons' })}
                onClick={() => setTab('Pricing & Coupons')}
                role='tab'
              >
                Pricing & Coupons
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, { active: tab === 'SEO & Analytics' })}
                onClick={() => setTab('SEO & Analytics')}
                role='tab'
              >
                SEO & Analytics
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, { active: tab === 'Settings' })}
                onClick={() => setTab('Settings')}
                role='tab'
              >
                Settings
              </a>
            </li>
            <li className='nav-item' style={{marginLeft:"calc(20.65rem + 1px)"}}>
              <button type="button" className="btn btn-sm btn-success" style={{margin:'1rem'}} onClick={()=>onSaveHandler()}>Save</button>
              </li>
          </ul>
          
        </div>
        
        {/* end::Header */}

        {/* begin::Form */}
        <form className='form'>
          {/* begin::Body */}
          <div className='card-body'>
            <div className='tab-content pt-3'>
              <div className={clsx('tab-pane', { active: tab === 'Course Landing' })}>
                <CourseLandingTab callback={handleCallback} />
              </div>

              <div className={clsx('tab-pane', { active: tab === 'Practice Test' })}>
                
                <PracticeTestTab course={state}/>
              </div>

              <div className={clsx('tab-pane', { active: tab === 'Students' })}>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Display:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <div className='form-check form-check-custom form-check-solid form-switch mb-2'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name='layout-builder[layout][pageTitle][display]'
                        checked={config.pageTitle?.display}
                        onChange={() =>
                          updateData({
                            pageTitle: {
                              ...config.pageTitle!,
                              display: !config.pageTitle?.display,
                            },
                          })
                        }
                      />
                    </div>
                    <div className='form-text text-muted'>Display page title</div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Breadcrumb:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <div className='form-check form-check-custom form-check-solid form-switch mb-2'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name='layout-builder[layout][pageTitle][breadCrumbs]'
                        checked={config.pageTitle?.breadCrumbs}
                        onChange={() =>
                          updateData({
                            pageTitle: {
                              ...config.pageTitle!,
                              breadCrumbs: !config.pageTitle?.breadCrumbs,
                            },
                          })
                        }
                      />
                    </div>
                    <div className='form-text text-muted'>Display page title</div>
                  </div>
                </div>
              </div>

              <div className={clsx('tab-pane', { active: tab === 'Case Study' })}>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Width:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <select
                      className='form-select form-select-solid'
                      name='layout-builder[layout][content][width]'
                      value={config.content.width}
                      onChange={(e) =>
                        updateData({
                          content: {
                            ...config.content,
                            width: e.target.value as 'fixed' | 'fluid',
                          },
                        })
                      }
                    >
                      <option value='fluid'>Fluid</option>
                      <option value='fixed'>Fixed</option>
                    </select>
                    <div className='form-text text-muted'>Select layout width type.</div>
                  </div>
                </div>
              </div>

              <div className={clsx('tab-pane', { active: tab === 'Pricing & Coupons' })}>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Display:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <div className='switch switch-icon'>
                      <div className='form-check form-check-custom form-check-solid form-switch mb-2'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          name='layout-builder[layout][aside][display]'
                          checked={config.aside.display}
                          onChange={() =>
                            updateData({
                              aside: {
                                ...config.aside,
                                display: !config.aside.display,
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className='form-text text-muted'>Display Aside</div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Theme:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <select
                      className='form-select form-select-solid'
                      name='layout-builder[layout][aside][theme]'
                      value={config.aside.theme}
                      onChange={(e) =>
                        updateData({
                          aside: {
                            ...config.aside,
                            theme: e.target.value as 'dark' | 'light',
                          },
                        })
                      }
                    >
                      <option value='dark'>Dark</option>
                      <option value='light'>Light</option>
                    </select>
                    <div className='form-text text-muted'>Select header left content type.</div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Fixed:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <div className='switch switch-icon'>
                      <div className='form-check form-check-custom form-check-solid form-switch mb-2'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          name='layout-builder[layout][aside][fixed]'
                          checked={config.aside.fixed}
                          onChange={() =>
                            updateData({
                              aside: {
                                ...config.aside,
                                fixed: !config.aside.fixed,
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className='form-text text-muted'>Enable fixed aside</div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Minimize:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <div className='switch switch-icon'>
                      <div className='form-check form-check-custom form-check-solid form-switch mb-2'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          name='layout-builder[layout][aside][minimize]'
                          checked={config.aside.minimize}
                          onChange={() =>
                            updateData({
                              aside: {
                                ...config.aside,
                                minimize: !config.aside.minimize,
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className='form-text text-muted'>Enable aside minimization</div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Minimized:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <div className='switch switch-icon'>
                      <div className='form-check form-check-custom form-check-solid form-switch mb-2'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          name='layout-builder[layout][aside][minimized]'
                          checked={config.aside.minimized}
                          onChange={() =>
                            updateData({
                              aside: {
                                ...config.aside,
                                minimized: !config.aside.minimized,
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className='form-text text-muted'>Default minimized aside</div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Hoverable:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <div className='switch switch-icon'>
                      <div className='form-check form-check-custom form-check-solid form-switch mb-2'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          name='layout-builder[layout][aside][hoverable]'
                          checked={config.aside.hoverable}
                          onChange={() =>
                            updateData({
                              aside: {
                                ...config.aside,
                                hoverable: !config.aside.hoverable,
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className='form-text text-muted'>Enable hoverable minimized aside</div>
                  </div>
                </div>
              </div>

              <div className={clsx('tab-pane', { active: tab === 'SEO & Analytics' })}>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Width:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <select
                      className='form-select form-select-solid'
                      name='layout-builder[layout][footer][width]'
                      value={config.footer.width}
                      onChange={(e) =>
                        updateData({
                          footer: {
                            ...config.footer,
                            width: e.target.value as 'fixed' | 'fluid',
                          },
                        })
                      }
                    >
                      <option value='fluid'>Fluid</option>
                      <option value='fixed'>Fixed</option>
                    </select>
                    <div className='form-text text-muted'>Select layout width type.</div>
                  </div>
                </div>
              </div>
              <div className={clsx('tab-pane', { active: tab === 'Settings' })}>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Width:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <select
                      className='form-select form-select-solid'
                      name='layout-builder[layout][footer][width]'
                      value={config.footer.width}
                      onChange={(e) =>
                        updateData({
                          footer: {
                            ...config.footer,
                            width: e.target.value as 'fixed' | 'fluid',
                          },
                        })
                      }
                    >
                      <option value='fluid'>Fluid</option>
                      <option value='fixed'>Fixed</option>
                    </select>
                    <div className='form-text text-muted'>Select layout width type.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end::Body */}


        </form>
        {/* end::Form */}
      </div>
    </>
  )
}

export { CourseDetails }

