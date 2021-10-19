import React from "react";

import "./navigation.scss";
import Node from "../Node/Node";

interface NavigationProps {
  data: any;
  activeFolder: string;
  setActiveFolder: any;
  setActiveFolderAddress: any;
  parentFolder?: any;
}

const Navigation: React.FC<NavigationProps> = (props) => {
  const {
    data,
    activeFolder,
    setActiveFolder,
    parentFolder,
    setActiveFolderAddress,
  } = props;

  return (
    <>
      {Object.keys(data).map((folder: string) => (
        <div className="navigation" key={data[folder].id}>
          <Node
            name={data[folder].name}
            id={folder}
            activeFolder={activeFolder}
            renderActiveNode={setActiveFolder}
            parentFolder={parentFolder}
            setActiveFolderAddress={setActiveFolderAddress}
          />
          {data[folder].subFolders && (
            <Navigation
              data={data[folder].subFolders}
              activeFolder={activeFolder}
              setActiveFolder={setActiveFolder}
              parentFolder={[
                ...parentFolder,
                { name: data[folder].name, id: data[folder].id },
              ]}
              setActiveFolderAddress={setActiveFolderAddress}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default Navigation;
