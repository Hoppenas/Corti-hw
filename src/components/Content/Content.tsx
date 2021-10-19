import "./content.scss";

interface IContentProps {
  activeFolderAddress: Array<{
    name: string;
    id: string;
  }>;
  setActiveFolder: Function;
  setActiveFolderAddress: Function;
}

const Content = (props: IContentProps) => {
  const { activeFolderAddress, setActiveFolder, setActiveFolderAddress } =
    props;

  const renderActiveFolder = (id?: string, index?: number) => {
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
