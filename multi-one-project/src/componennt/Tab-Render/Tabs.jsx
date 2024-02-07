import React, { useState } from 'react';

const Tabs = ({ tabs, onChange }) => {
    const [currentTab, setCurrentTab] = useState(1);

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-row rounded-lg bg-red-700'>
                {tabs.map(tab => (
                    <div
                        key={tab.id}
                        className='p-2 cursor-pointer'
                        style={{
                            backgroundColor: currentTab === tab.id ? '#F59E0B' : '#EF4444',
                        }}
                        onClick={() => setCurrentTab(tab.id)}
                    >
                        {tab.Label}
                    </div>
                ))}
            </div>
            <div>{tabs[currentTab - 1].content}</div>
        </div>
    );
};

export default Tabs;
