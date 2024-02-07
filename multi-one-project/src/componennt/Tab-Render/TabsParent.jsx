import React from 'react'
import Tabs from './Tabs'

export const TabsParent = () => {
    const tabs=[
        {
            id:1,
            Label:'Tab 1',
            content:'this is tab 1',
        },
        {
            id:2,
            Label:'Tab 2',
            content:'this is tab 2',
        },
        {
            id:3,
            Label:'Tab 3',
            content:'this is tab 3',
        }
    ]
  return (
    <div><Tabs tabs={tabs}  /></div>
  )
}
