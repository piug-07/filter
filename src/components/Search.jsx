import React, { useState } from "react";
import style from "./navbar.module.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const Search = () => {
  // const [modal, setModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  

  const marks = [
    {
      value: 0,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 6,
      label: "6+",
    },
  ];
  const stripend = [
    {
      value: 1,
      label: "1k",
    },
    {
      value: 5,
      label: "5k",
    },
    {
      value: 10,
      label: "10k",
    },
    {
      value: 20,
      label: "20k",
    },
    {
      value: 30,
      label: "30k",
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }

  const togglePopup = async (id) => {
    setShowPopup(!showPopup);
    // setUserid(id);
  };

  // if (modal) {
  //   document.body.classList.add("active-modal");
  // } else {
  //   document.body.classList.remove("active-modal");
  // }

  return (
    <div className={style.main1}>
      {showPopup ? <div className={style.overlay}></div> : null}
      <div className={style.main2}>
        <h3>Popular</h3>
        <h3>Newest</h3>
        <h3>Bookmarks</h3>
      </div>
      <div className={style.main3}>
        <div className={style.main4}>
          <input type="text" className={style.input} />
          <div className={style.search1}>
            <SearchRoundedIcon className={style.icon0} />
          </div>
        </div>
        <div className={style.icon00} onClick={() => togglePopup()}>
          <FilterAltRoundedIcon className={style.iconp} />
        </div>
      </div>
      {showPopup ? (
        <div className={style.popupContainer}>
          <div className={style.popupContent}>
            <div className={style.popupHead}>
              <div className={style.headRight}>
                <CloseIcon
                  onClick={(id) => {
                    togglePopup(id);
                  }}
                />
                <h3> Filters</h3>
              </div>
            </div>
            <div className="text-black">
              <div className="flex flex-col">
                <div className="flex flex-row justify-evenly  ">
                  <div className="flex flex-col pl-5">
                    <h3 className="">Duration</h3>
                    <div>
                      <Box sx={{ width: 300 }} className="mt-5 w-60" style={{ width: "17rem" }}>
                        <Slider
                          aria-label="Custom marks"
                          defaultValue={2}
                          getAriaValueText={valuetext}
                          step={1}
                          valueLabelDisplay="auto"
                          marks={marks}
                          min={1}
                          max={12}
                        />
                      </Box>
                    </div>
                  </div>
                  <div className="flex flex-col pl-5">
                    <h3 className="mb-3">Location</h3>
                    <input type="text" className="border-2 border-solid h-10 rounded-2xl p-2"/>
                  </div>
                </div>
                <div className="flex flex-row justify-evenly ">
                  <div className="flex flex-col ">
                    <h3 className="">stripend</h3>
                    <div>
                      <Box sx={{ width: 300 }} className="mt-5 w-60" style={{ width: "17rem" }}>
                        <Slider
                          aria-label="Custom marks"
                          defaultValue={5}
                          getAriaValueText={valuetext}
                          step={1}
                          valueLabelDisplay="auto"
                          marks={stripend}
                          min={1}
                          max={30}
                        />
                      </Box>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="mb-3">Applicants</h3>
                    <input type="text" className="border-2 border-solid h-10 rounded-2xl p-2"/>
                  </div>
                </div>
                <button className="text-white w-32 h-12 bg-[#6938EF] mt-10 rounded-lg">Apply</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
