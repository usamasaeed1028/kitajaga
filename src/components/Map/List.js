import React, { useState } from "react";
import Button from "../UI/Button";
import flag from "../../assets/images/whiteflag.png";
import Image from "next/image";
import ListItem from "./ListItem";
import img from "../../assets/images/img-no-place.png";



const List = ({data,setDetails}) => {
  const [isNeedHelp, setIsNeedHelp] = useState(true);
  return (
    <div className="flex flex-col gap-y-6 mt-6">
      <h1 className="font-extrabold text-lg px-7">Nearby List</h1>
      <div className="flex items-center gap-x-2 px-7">
        <Button
          className={`${
            isNeedHelp ? "bg-black" : "bg-[#DDDDDD]"
          } text-sm px-4 text-white py-2 hover:shadow-md`}
          onClick={() => setIsNeedHelp(true)}
        >
          I need help
          <div>
            <Image src={flag} width={22} height={22} />
          </div>
        </Button>
        <Button
          className={`${
            isNeedHelp ?"bg-[#DDDDDD]" : "bg-black"
          } text-sm px-4 text-white py-2 hover:shadow-md`}
          onClick={() => setIsNeedHelp(false)}
        >
          I want to help 🍱
        </Button>
      </div>
      {isNeedHelp && (
        <div>
          {data.map((data) => (
            <ListItem data={data} key={data.id} setDetails={setDetails} />
          ))}
        </div>
      )}
      {!isNeedHelp && (
        <div className="flex flex-col mt-10 justify-center items-center">
          <div>
            <Image src={img} width={320} height={150} />
          </div>
          <span className="font-bold text-base">No data found</span>
        </div>
      )}
    </div>
  );
};

export default List;