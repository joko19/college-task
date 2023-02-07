import { useEffect, useState } from "react";
import { instance } from "./instance";

interface AppProps {
  title: string;
  author:string
}

function App() {
  const [data, setData] = useState<AppProps[]>([]);

  useEffect(() => {
    fetch(`${instance}/api/posts`)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  
  return (
    <h1 className="text-3xl font-bold text-center mt-12">
      {data.map((item, index) => (
        <div key={index}>
          <div>{item.title}</div>
          <div>{item.author}</div>
        </div>
      ))}
    </h1>
  );
}

export default App;
