'use client'

import {FunctionComponent, useEffect, useState} from 'react'
import utilStyles from '@/styles/utils.module.css'
import {usePiwikPro} from '@piwikpro/next-piwik-pro'

const DownloadAndOutlinkExamples: FunctionComponent = () => {
  const {DownloadAndOutlink} = usePiwikPro()

  const [linkTrackingTimer, setLinkTrackingTimer] = useState<string>('')

  useEffect(() => {
    const callAsyncMethods = async () => {
      // function trackLink(url: string, linkType: string, customData?: object | undefined, callback?: ((params: any) => void) | undefined): void
      DownloadAndOutlink.trackLink('http://localhost:3000', 'link')

      // function enableLinkTracking(enable: boolean): void
      DownloadAndOutlink.enableLinkTracking(true)

      // function setLinkClasses(classes: string[]): void
      DownloadAndOutlink.setLinkClasses(['this-is-an-outlink'])

      // function setDownloadClasses(classes: string[]): void
      DownloadAndOutlink.setDownloadClasses(['this-is-a-download'])

      // function setDownloadExtensions(extensions: string[]): void
      DownloadAndOutlink.setDownloadExtensions(['zip'])

      // function addDownloadExtensions(extensions: string[]): void
      DownloadAndOutlink.addDownloadExtensions(['7z'])

      // function removeDownloadExtensions(extensions: string[]): void
      DownloadAndOutlink.removeDownloadExtensions(['pdf', 'xlsx'])

      // function setLinkTrackingTimer(time: number): void
      DownloadAndOutlink.setLinkTrackingTimer(10)

      // function getLinkTrackingTimer(): Promise<string>
      const lTrackingTimer = await DownloadAndOutlink.getLinkTrackingTimer()
      setLinkTrackingTimer(lTrackingTimer)

      // function setIgnoreClasses(classes: string[]): void
      DownloadAndOutlink.setIgnoreClasses(['do-not-track'])
    }

    callAsyncMethods()
  }, [])

  return (
    <>
      <h2>Examples results</h2>
      <div>
        <p>
          <code>DownloadAndOutlink.getLinkTrackingTimer()</code> -{' '}
          {linkTrackingTimer}
        </p>
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
        <button
          onClick={() => {
            DownloadAndOutlink.trackLink('http://localhost:3000', 'link')
          }}
        >
          DownloadAndOutlink.trackLink
        </button>
        <button
          onClick={() => {
            DownloadAndOutlink.enableLinkTracking(true)
          }}
        >
          DownloadAndOutlink.enableLinkTracking
        </button>
        <button
          onClick={() => {
            DownloadAndOutlink.setLinkClasses(['this-is-an-outlink'])
          }}
        >
          DownloadAndOutlink.setLinkClasses
        </button>
        <button
          onClick={() => {
            DownloadAndOutlink.setDownloadClasses(['this-is-a-download'])
          }}
        >
          DownloadAndOutlink.setDownloadClasses
        </button>
        <button
          onClick={() => {
            DownloadAndOutlink.addDownloadExtensions(['rar'])
          }}
        >
          DownloadAndOutlink.addDownloadExtensions - add RAR tracking
        </button>
        <button
          onClick={() => {
            DownloadAndOutlink.removeDownloadExtensions(['rar'])
          }}
        >
          DownloadAndOutlink.removeDownloadExtensions - remove RAR tracking
        </button>
        <button
          onClick={() => {
            DownloadAndOutlink.setIgnoreClasses(['do-not-track'])
          }}
        >
          DownloadAndOutlink.setIgnoreClasses
        </button>
        <button
          onClick={() => {
            DownloadAndOutlink.setLinkTrackingTimer(20)
          }}
        >
          DownloadAndOutlink.setLinkTrackingTimer
        </button>
        <button
          onClick={() => {
            const callAsyncMethods = async () => {
              const lTrackingTimer =
                await DownloadAndOutlink.getLinkTrackingTimer()
              setLinkTrackingTimer(lTrackingTimer)
            }

            callAsyncMethods()
          }}
        >
          CustomDimensions.getCustomDimensionValue
        </button>
        <h2>Example download</h2>
        <div>
          <a href="/files/example.zip">Download ZIP</a> - tracked download
          <br/>
          <a href="/files/example.pdf">Download PDF</a> - outlink
          <br/>
          <a href="/files/example.rar">Download RAR</a> - download tracked
          disabled by default, you can turn on/off by button
          <br/>
          <a className="do-not-track" href="/files/example.xlsx">
            Download XLSX
          </a>{' '}
          - download turned off by default using className
        </div>
      </div>
    </>
  )
}

export default DownloadAndOutlinkExamples