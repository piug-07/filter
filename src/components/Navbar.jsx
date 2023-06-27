import React from "react";
import style from "./navbar.module.css"
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import DrawRoundedIcon from '@mui/icons-material/DrawRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import WebAssetRoundedIcon from '@mui/icons-material/WebAssetRounded';

const Navbar = () => {
  return (
    <div className={style.main}>
      <div className="">
        <h1 className={style.head}>InternBrand</h1>
      </div>
      <div className="flex ml-36">
        <ul className={style.ul}>
          <li><LibraryBooksRoundedIcon className={style.icon1}/>Browse Lisitings</li>
          <li><WebAssetRoundedIcon className={style.icon1}/>Application History</li>
          <li><DrawRoundedIcon className={style.icon1}/>Blog</li>
          <li><ContactPageRoundedIcon className={style.icon1}/>Contact us</li>
        </ul>
      </div>
      <div className={style.side}>
        <NotificationsRoundedIcon className={style.icon}/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6qIyZGrXS1OnTOIcc7Wy6mOc0YeXZ8io8Q&usqp=CAU"  alt=""  className={style.img}/>
      </div>
    </div>
  );
};

export default Navbar;
