import React from "react";
import "./content.scss";

interface ContentProps {
  activeFolderAddress: Array<{
    name?: string | undefined;
    id?: string;
  }>;
  setActiveFolder: any;
  setActiveFolderAddress: any;
}

const Content: React.FC<ContentProps> = (props) => {
  const { activeFolderAddress, setActiveFolder, setActiveFolderAddress } =
    props;

  const renderActiveFolder = (id?: string | undefined, index?: number) => {
    setActiveFolder(id);
    setActiveFolderAddress(activeFolderAddress.slice(0, index));
  };

  return (
    <main className="content">
      <div className="breadCrumps">
        {activeFolderAddress.map((folder, index) => (
          <button
            onClick={() => renderActiveFolder(folder.id, index)}
            key={folder.id}
            className="breadCrumbs--button"
          >
            {`/ ${folder.name} `}
          </button>
        ))}
      </div>
    </main>
  );
};

export default Content;
