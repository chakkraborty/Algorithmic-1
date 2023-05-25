import { Dropdown, ButtonGroup } from "react-bootstrap";
import "./grid.css";
import { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import Check from "react-bootstrap/FormCheckInput";
import axios from "axios";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Table, TableBody, TableHead, TableRow } from "@mui/material"


export default function Grid(props) {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [badge, setBadge] = useState("sucess");

    const func = (str) => {
        if (str === "Medium")
            setBadge("warning");
        else if (str === "Hard")
            setBadge("danger");
        else
            setBadge("success");
    }

    useEffect(() => {
        func(props.difficulty);
    })

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            const obj = res.data.slice(15);
            setData(obj);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <>
            <Table className="table table-light table-hover table-responsive-sm table-striped">
                <TableHead className="thead-dark">
                    <TableRow>
                        <th scope="col">
                            <h5>Status</h5>
                        </th>
                        <th scope="col">
                            <h5>Difficulty</h5>
                        </th>
                        <th scope="col">
                            <h5>Problem</h5>
                        </th>
                        <th scope="col"></th>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((it) => {

                        return (
                            <TableRow key={it._id}>
                                <td>
                                    <Check
                                        type="checkbox"
                                        name="rem"
                                        className='bg-inherit'
                                        size="lg"
                                    />
                                </td>
                                <td>
                                    <Badge bg={badge}>{props.difficulty}</Badge>
                                </td>
                                <td>
                                    {it.title}
                                </td>
                                <td>
                                    <Dropdown as={ButtonGroup}>

                                        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                        <Dropdown.Toggle variant="link" id="dropdown-split-basic" />
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </TableRow>);
                    })}
                </TableBody>
            </Table>
        </>
    );
}