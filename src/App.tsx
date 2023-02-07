import { useEffect, useState } from "react";
import { instance } from "./instance";

interface AppProps {
  name: string;
  type: string;
  status: string;
  created_at: string;
}

function App() {
  const [data, setData] = useState<AppProps[]>([]);

  useEffect(() => {
    fetch(`${instance}/api/projects`)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div className="p-8 bg-gray-100 h-screen">
      <h1 className="font-bold text-xl">Hello Gerard</h1>
      <h2>Here are the list of projects you submitted</h2>

      <div className="bg-gray-50 rounded-lg p-4 mt-6">
        <h1 className="font-bold text-xl">Recent Projects</h1>
        <div className="w-full flex bg-white p-4 my-4 rounded items-center font-semibold">
          <div className="w-60">Name</div>
          <div className="w-60">Type</div>
          <div className="w-60">Status</div>
          <div className="w-60">Created</div>
        </div>
        {data.map((item, index) => (
          <div className="w-full flex bg-white p-4 my-4 rounded items-center font-medium">
            <div className="w-60">{item.name}</div>
            <div className="w-60">{item.type}</div>
            <div className="w-60">{item.status}</div>
            <div className="w-60">{item.created_at}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
