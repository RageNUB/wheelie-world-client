import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "./ToyCard";
import Spinner from "../Shared/Spinner";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);

  if (toys.length < 1) {
    <Spinner></Spinner>;
  }

  const url = `https://wheelie-world-server.vercel.app/category?category=Racing`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [url]);

  const handleCategoryData = (category) => {
    fetch(
      `https://wheelie-world-server.vercel.app/category?category=${category}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <div className="mt-8 mb-8">
      <h1 className="text-4xl font-bold uppercase text-center">
        Shob By Category
      </h1>
      <div className="text-center mt-5">
        <Tabs>
          <TabList>
            <Tab onClick={() => handleCategoryData("Racing")}>Racing</Tab>
            <Tab onClick={() => handleCategoryData("Trucks")}>Trucks</Tab>
            <Tab onClick={() => handleCategoryData("Sports")}>Sports</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {toys.map((toy) => (
                <ToyCard key={toy._id} toy={toy}></ToyCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {toys.map((toy) => (
                <ToyCard key={toy._id} toy={toy}></ToyCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {toys.map((toy) => (
                <ToyCard key={toy._id} toy={toy}></ToyCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
