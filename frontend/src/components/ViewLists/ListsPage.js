import React from "react";
import "./ListsPage.css";
import Navbar from "../Navbar/Navbar";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const ListsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="ListPageWrapper">
        <div className="myListLeftSection">
          <div className="myListHeader">My List</div>
          <div className="myListItem"> 1. ListItem</div>
        </div>
        <div className="myListRightSection">
          <div className="myListRightSectionWrapper">
            <div className="myListRightSectionTitle">DP list</div>
            <Button variant="outline-danger" className="myListDeleteButton">
              Delete
            </Button>{" "}
          </div>
          <div className="myListRightSectionItemWrapper">
            <div className="myListRightSectionProblemTitleWrapper">
              <div className="myListCheckBox">checkBox</div>
              <div>1.</div>
              <div className="myListRightSectionProblemTitle">
                Find the longest increasing subsequence
              </div>
              <DeleteOutlineIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListsPage;
