import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import "./node.scss";

interface NodeProps {
  name: string;
  id: string;
  renderActiveNode?: any;
  activeFolder?: string;
  parentFolder?: any;
  setActiveFolderAddress: any;
}

const Node: React.FC<NodeProps> = (props) => {
  const {
    name,
    id,
    renderActiveNode,
    activeFolder,
    parentFolder,
    setActiveFolderAddress,
  } = props;

  const renderNode = () => {
    renderActiveNode(id);
    if (parentFolder !== [null]) {
      const fullBreadCrumbAddress = parentFolder.concat([
        { name: name, id: id },
      ]);
      setActiveFolderAddress(fullBreadCrumbAddress);
    }
  };

  return (
    <button
      className={`node ${activeFolder === id ? "node__active" : ""}`}
      onClick={renderNode}
    >
      <FontAwesomeIcon icon={faCaretDown} className="arrow" />
      {name}
    </button>
  );
};

export default Node;
