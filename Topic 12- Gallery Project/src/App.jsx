import { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [Userdata, setuserdata] = useState([]);
  const [page, setpage] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=30`,
    );
    setuserdata(response.data);
  };
  useEffect(() => {
    getData();
  }, [page]);

  let printuserdata = (
    <h3 className="text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading ...
    </h3>
  );
  if (Userdata.length > 0) {
    printuserdata = Userdata.map((elem, idx) => {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 bg-white rounded-xl overflow-hidden">
              <img
                src={elem.download_url}
                alt={elem.url}
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }
  return (
    <div className="bg-black overflow-auto h-screen text-white p-4">
      <div className="flex h-[82%] flex-wrap gap-4 p-2">{printuserdata}</div>
      <div className="flex justify-center items-center p-4 gap-6">
        <button
          className="bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer"
          onClick={() => {
            if (page > 1) {
              setpage(page - 1);
              setuserdata([]);
            }
          }}
        >
          Prev
        </button>
        <h2>Page {page}</h2>
        <button
          className="bg-amber-400 text-black rounded px-4 py-2 font-semiboldvtext-sm cursor-pointer"
          onClick={() => {
            setpage(page + 1);
            setuserdata([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
