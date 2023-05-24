import React from "react";
import "./ListsPage.css";
import Navbar from "../Navbar/Navbar";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";
import AddListButton from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const ListsPage = () => {
  const [l, setl] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="ListPageWrapper">
        <div className="myListLeftSection">
          <div className="myListHeader">My List</div>
          <div className="myListItem"> 1. ListItem</div>
          <div className="myListLeftSectionBottom">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name of new list</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter list name"
                  className="newListNameField"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Create new list
              </Button>
            </Form>
          </div>
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
              {/* <div className="myListCheckBox">checkBox</div> */}
              {!l && <CheckBoxOutlineBlankIcon onClick={() => setl(true)} />}
              {l && (
                <CheckBoxIcon
                  className="myListProblemItemChecker"
                  onClick={() => setl(false)}
                />
              )}
              <div>1.</div>
              <div className="myListRightSectionProblemTitle">
                Find the longest increasing subsequence
              </div>
            </div>
            <DeleteOutlineIcon className="myListDeleteIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListsPage;
