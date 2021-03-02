import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import styles from './Tabs.module.css';

// TODO: replace any types with react tab props
function MyTab({ children, ...props }: any) {
  return (
    <Tab selectedClassName={styles.selected} className={styles.tab} {...props}>
      {children}
    </Tab>
  );
}

MyTab.tabsRole = 'Tab';

function MyTabList({ children, ...props }: any) {
  return (
    <div className="relative">
      <div className="overflow-y-auto px-3 -mx-3">
        <TabList className="flex whitespace-nowrap overflow-visible" {...props}>
          {children}
        </TabList>
      </div>
      <div className="h-px bg-gray-250"></div>
    </div>
  );
}

MyTabList.tabsRole = 'TabList';

function MyTabPanel({ children, ...props }: any) {
  return (
    <TabPanel className={styles.panel} {...props}>
      {children}
    </TabPanel>
  );
}

MyTabPanel.tabsRole = 'TabPanel';

export { Tabs, MyTab as Tab, MyTabPanel as TabPanel, MyTabList as TabList };
