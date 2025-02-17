import Head from 'next/head'
import utilStyles from '@/styles/utils.module.css'
import React from 'react'
import {PageData} from '@/types/pageData'
import CustomEventButton from '@/src/components/CustomEvent/CustomEventButton'
import {NextPage} from 'next'

const getPageData = (): PageData => (
  {
    title: 'CustomEvent',
    heading: 'Send Custom Events',
    description:
      'Content Tracking lets you track custom events not defined in rest of methods.',
    methods: [
      {
        method: 'trackEvent',
        usage:
          'CustomEvent.trackEvent(category: string, action: string, name?: string | undefined, value?: number | undefined): void',
        desc: 'Tracks manual content impression event.'
      }
    ]
  }
)

const CustomEventPage: NextPage = () => {
  const pageData = getPageData()

  return (
    <>
      <Head>
        <title>{pageData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{pageData.heading}</h1>
        <div>
          <p>{pageData.description}</p>
        </div>
        <h2 className={utilStyles.headingXl}>Import</h2>
        <div>
          <p>
            <code>
              {`import { usePiwikPro } from '@piwikpro/next-piwik-pro'`}
              <br/>
              {'const { CustomEvent } = usePiwikPro()'}
            </code>
          </p>
        </div>
        <h2 className={utilStyles.headingXl}>Methods</h2>
        <div>
          <ul className={utilStyles.list}>
            {pageData.methods.map(({usage, desc, method}) => (
              <li className={utilStyles.listItem} key={method}>
                <code>{usage}</code> - {desc}
              </li>
            ))}
          </ul>
        </div>
        <h2 className={utilStyles.headingXl}>Sample usage</h2>
        <p>
          To see tracking methods usage please turn developers tools in your
          browser and track results on the console.
        </p>
        <p>
          You can use methods from that collection in page props for example{' '}
          <code>useEffect</code> (methods are invoked when the page starts) or
          as on example below on the button click using <code>onClick</code>{' '}
          prop.
        </p>
        <div>
          <CustomEventButton title={pageData.title}/>
        </div>
      </article>
    </>
  )
}

export default CustomEventPage
