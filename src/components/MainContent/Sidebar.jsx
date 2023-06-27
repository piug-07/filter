import React, { useEffect } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { useState } from "react";

const Sidebar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../database/data.json");
        const json = await response.json();
        setData(json);
        console.log(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log("x", data);
  return (
    <div className=" flex flex-col max-h-max border-solid border-2 ">
      <div className="flex flex-col w-9/12 ml-14 mb-3 border-solid border-2  shadow-xl bg-white rounded-lg">
        <div className="flex flex-row space-x-72 ml-5 pt-3">
          <h3>
            Motion Graphic Designer{" "}
            <span className="font-semibold	text-[#d1cdcd]">Xapo visuals</span>
          </h3>
          <p className="border-solid border-2 mr-3 ">
            <BookmarkBorderIcon
              className="text-[16px ]"
              style={{ fontSize: "40px" }}
            />
          </p>
        </div>
        <div className="flex flex-row mt-5 justify-between	ml-5">
          <a
            href="https://postimg.cc/SjQ08T1D"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.postimg.cc/SjQ08T1D/TCS-NS-7401f1bd.png"
              border="0"
              alt="TCS-NS-7401f1bd"
              className="w-14 h-8 "
            />
          </a>{" "}
          <div
            className=" border-solid border-2 w-72 rounded-xl justify-center	items-center	bg-[#e3e8e5] content-center	self-center	pl-4 mr-3 text-lg
"
          >
            <p>Express | Mongodb | Blender | +2</p>
          </div>
        </div>
        <div className="flex flex-col justify-between	ml-3 mt-5 mb-6">
          <div className="flex flex-row	 ">
            <p className="w-56">
              <HourglassEmptyOutlinedIcon className="text-[#6938EF]" />1 Month
            </p>
            <p className="w-56">
              <AccountBalanceWalletIcon className="text-[#6938EF]" />
              Unpaid
            </p>
          </div>
          <div className="flex flex-row mt-2">
            <p className="w-56">
              <PeopleAltIcon className="text-[#6938EF]" />
              123 Applicants
            </p>
            <p className="w-56">
              <QueryBuilderIcon className="text-[#6938EF]" />
              End in 6 days
            </p>
          </div>
        </div>
      </div>
      {/* ----------------------- */}

      <div className="flex flex-col w-9/12 ml-14 mb-3 border-solid border-2  shadow-xl bg-white rounded-lg">
        <div className="flex flex-row space-x-72 ml-5 pt-3">
          <h3>
            Motion Graphic Designer{" "}
            <span className="font-semibold	text-[#d1cdcd]">Xapo visuals</span>
          </h3>
          <p className="border-solid border-2 mr-3 ">
            <BookmarkBorderIcon
              className="text-[16px]"
              style={{ fontSize: "40px" }}
            />
          </p>
        </div>
        <div className="flex flex-row mt-5 justify-between	ml-5">
          <a
            href="https://postimg.cc/SjQ08T1D"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.postimg.cc/SjQ08T1D/TCS-NS-7401f1bd.png"
              border="0"
              alt="TCS-NS-7401f1bd"
              className="w-14 h-8 "
            />
          </a>{" "}
          <div className=" border-solid border-2 w-72 rounded-xl justify-center	items-center	bg-[#e3e8e5] content-center	self-center	pl-4 mr-3 text-lg">
            <p>Express | Mongodb | Blender | +2</p>
          </div>
        </div>
        <div className="flex flex-col justify-between	ml-3 mt-5 mb-6">
          <div className="flex flex-row	 ">
            <p className="w-56">
              <HourglassEmptyOutlinedIcon className="text-[#6938EF]" />1 Month
            </p>
            <p className="w-56">
              <AccountBalanceWalletIcon className="text-[#6938EF]" />
              Unpaid
            </p>
          </div>
          <div className="flex flex-row mt-2">
            <p className="w-56">
              <PeopleAltIcon className="text-[#6938EF]" />
              123 Applicants
            </p>
            <p className="w-56">
              <QueryBuilderIcon className="text-[#6938EF]" />
              End in 6 days
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-9/12 ml-14 mb-3 border-solid border-2  shadow-xl bg-white rounded-lg">
        <div className="flex flex-row space-x-72 ml-5 pt-3">
          <h3>
            Motion Graphic Designer{" "}
            <span className="font-semibold	text-[#d1cdcd]">Xapo visuals</span>
          </h3>
          <p className="border-solid border-2 mr-3 ">
            <BookmarkBorderIcon
              className="text-[16px ]"
              style={{ fontSize: "40px" }}
            />
          </p>
        </div>
        <div className="flex flex-row mt-5 justify-between	ml-5">
          <a
            href="https://postimg.cc/SjQ08T1D"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.postimg.cc/SjQ08T1D/TCS-NS-7401f1bd.png"
              border="0"
              alt="TCS-NS-7401f1bd"
              className="w-14 h-8 "
            />
          </a>{" "}
          <div className=" border-solid border-2 w-72 rounded-xl justify-center	items-center	bg-[#e3e8e5] content-center	self-center	pl-4 mr-3 text-lg">
            <p>Express | Mongodb | Blender | +2</p>
          </div>
        </div>
        <div className="flex flex-col justify-between	ml-3 mt-5 mb-6">
          <div className="flex flex-row	 ">
            <p className="w-56">
              <HourglassEmptyOutlinedIcon className="text-[#6938EF]" />1 Month
            </p>
            <p className="w-56">
              <AccountBalanceWalletIcon className="text-[#6938EF]" />
              Unpaid
            </p>
          </div>
          <div className="flex flex-row mt-2">
            <p className="w-56">
              <PeopleAltIcon className="text-[#6938EF]" />
              123 Applicants
            </p>
            <p className="w-56">
              <QueryBuilderIcon className="text-[#6938EF]" />
              End in 6 days
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-9/12 ml-14 mb-3 border-solid border-2  shadow-xl bg-white rounded-lg">
        <div className="flex flex-row space-x-72 ml-5 pt-3">
          <h3>
            Motion Graphic Designer{" "}
            <span className="font-semibold	text-[#d1cdcd]">Xapo visuals</span>
          </h3>
          <p className="border-solid border-2 mr-3 ">
            <BookmarkBorderIcon
              className="text-[16px ]"
              style={{ fontSize: "40px" }}
            />
          </p>
        </div>
        <div className="flex flex-row mt-5 justify-between	ml-5">
          <a
            href="https://postimg.cc/SjQ08T1D"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.postimg.cc/SjQ08T1D/TCS-NS-7401f1bd.png"
              border="0"
              alt="TCS-NS-7401f1bd"
              className="w-14 h-8 "
            />
          </a>{" "}
          <div
            className=" border-solid border-2 w-72 rounded-xl justify-center	items-center	bg-[#e3e8e5] content-center	self-center	pl-4 mr-3 text-lg
"
          >
            <p>Express | Mongodb | Blender | +2</p>
          </div>
        </div>
        <div className="flex flex-col justify-between	ml-3 mt-5 mb-6">
          <div className="flex flex-row	 ">
            <p className="w-56">
              <HourglassEmptyOutlinedIcon className="text-[#6938EF]" />1 Month
            </p>
            <p className="w-56">
              <AccountBalanceWalletIcon className="text-[#6938EF]" />
              Unpaid
            </p>
          </div>
          <div className="flex flex-row mt-2">
            <p className="w-56">
              <PeopleAltIcon className="text-[#6938EF]" />
              123 Applicants
            </p>
            <p className="w-56">
              <QueryBuilderIcon className="text-[#6938EF]" />
              End in 6 days
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col w-9/12 ml-14 mb-3 border-solid border-2  shadow-xl bg-white rounded-lg

"
      >
        <div className="flex flex-row space-x-72 ml-5 pt-3">
          <h3>
            Motion Graphic Designer{" "}
            <span className="font-semibold	text-[#d1cdcd]">Xapo visuals</span>
          </h3>
          <p className="border-solid border-2 mr-3 ">
            <BookmarkBorderIcon
              className="text-[16px ]"
              style={{ fontSize: "40px" }}
            />
          </p>
        </div>
        <div className="flex flex-row mt-5 justify-between	ml-5">
          <a
            href="https://postimg.cc/SjQ08T1D"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.postimg.cc/SjQ08T1D/TCS-NS-7401f1bd.png"
              border="0"
              alt="TCS-NS-7401f1bd"
              className="w-14 h-8 "
            />
          </a>{" "}
          <div
            className=" border-solid border-2 w-72 rounded-xl justify-center	items-center	bg-[#e3e8e5] content-center	self-center	pl-4 mr-3 text-lg
"
          >
            <p>Express | Mongodb | Blender | +2</p>
          </div>
        </div>
        <div className="flex flex-col justify-between	ml-3 mt-5 mb-6">
          <div className="flex flex-row	 ">
            <p className="w-56">
              <HourglassEmptyOutlinedIcon className="text-[#6938EF]" />1 Month
            </p>
            <p className="w-56">
              <AccountBalanceWalletIcon className="text-[#6938EF]" />
              Unpaid
            </p>
          </div>
          <div className="flex flex-row mt-2">
            <p className="w-56">
              <PeopleAltIcon className="text-[#6938EF]" />
              123 Applicants
            </p>
            <p className="w-56">
              <QueryBuilderIcon className="text-[#6938EF]" />
              End in 6 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
