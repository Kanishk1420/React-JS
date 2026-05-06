import { useState, useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";
const App = () => {
  const [Userdata, setuserdata] = useState([]);
  const [page, setpage] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=20`,
    );
    setuserdata(response.data);
  };
  useEffect(() => {
    getData();
  }, [page]);

  let printuserdata = (
    <h3 className="text-gray-400 text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading ...
    </h3>
  );
  if (Userdata.length > 0) {
    printuserdata = Userdata.map((elem, idx) => {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }
  return (
    <div className="bg-black overflow-auto h-screen text-white p-4">
      <div className="flex h-[82%] flex-wrap gap-4 p-2">{printuserdata}</div>
      <div className="flex justify-center items-center p-4 gap-6">
        <button
          style={{ opacity: page == 1 ? 0.5 : 1, cursor: page == 1 ? "not-allowed" : "pointer" }}
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
