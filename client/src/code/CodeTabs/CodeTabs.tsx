import * as React from 'react';
import Tabs from 'react-draggable-tabs';
import CodeEditablePanel from '../CodeEditablePanel/CodeEditablePanel';

export interface Tab {
  active?: boolean;
  content: string;
  id: number;
  display?: React.ComponentType | React.ReactElement;
}

const CodeTabs = () => {
  const [tabs, setTabs] = React.useState<Tab[]>([
    {
      active: true,
      content: 'first.js',
      id: 1,
      display: <CodeEditablePanel>hello</CodeEditablePanel>
    },
    {
      active: true,
      content: 'second.js',
      id: 2,
    },
  ]);

  const moveTab = (dragIndex: number, hoverIndex: number) => {
    const newTabs = [...tabs];
    newTabs.splice(hoverIndex, 0, newTabs.splice(dragIndex, 1)[0]);
    setTabs(newTabs);
  };

  const selectTab = (selectedIndex: number, selectedID) => {
    const newTabs = tabs.map((tab) => ({
      ...tab,
      active: tab.id === selectedID,
    }));
    setTabs(newTabs);
  };

  const closedTab = (removedIndex: number, removedID) => {
    const newTabs = [...tabs];
    newTabs.splice(removedIndex, 1);

    if (tabs[removedIndex].active && newTabs.length !== 0) {
      const newActive = removedIndex === 0 ? 0 : removedIndex - 1;
      newTabs[newActive].active = true;
    }

    setTabs(newTabs);
  };

  const addTab = () => {
    const newTabs = [...tabs];
    newTabs.push({
      content: '',
      display: <div key={newTabs.length + 1}></div>,
      id: newTabs.length + 1,
    });

    setTabs(newTabs);
  };

  const activeTab = tabs.filter((tab) => tab.active === true);
  return (
    <div>
      <Tabs
        moveTab={moveTab}
        selectTab={selectTab}
        closeTab={closedTab}
        tabs={tabs}
      >
        {/* <button onClick={addTab}>+</button> */}
      </Tabs>
      {activeTab.length !== 0 ? activeTab[0].display : ''}
    </div>
  );

};

export default CodeTabs;
