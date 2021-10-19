import { useState, useEffect } from "react";
import axios from "axios";

import "./main.scss";
import Content from "../Content/Content";
import Navigation from "../Navigation/Navigation";

interface Idata {
  name?: string;
  id?: string;
  subfolder?: [Idata];
}

const Main = () => {
  const [data, setData] = useState<Idata>({});
  const [activeFolder, setActiveFolder] = useState("");
  const [activeFolderAddress, setActiveFolderAddress] = useState([]);
  const url = "https://run.mocky.io/v3/8a593f7c-8dc4-4247-bbc4-b4d4d58c1e0b";

  useEffect(() => {
    axios
      .get(url)
      .then((response: any) => {
        setData(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  return (
    <div className="main">
      <Navigation
        data={data}
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
        parentFolder={[]}
        setActiveFolderAddress={setActiveFolderAddress}
      />
      <Content
        activeFolderAddress={activeFolderAddress}
        setActiveFolder={setActiveFolder}
        setActiveFolderAddress={setActiveFolderAddress}
      />
    </div>
  );
};

export default Main;
