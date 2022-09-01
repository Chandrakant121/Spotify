import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from "react";
import "./Style.css"

export const Artists = () => {
    let datastore = JSON.parse(localStorage.getItem("logindetail"));
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/artists")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
            });
        // console.log(data)
    }, []);



    return (
        <>
            <Navbar />
            {
                datastore ? <div className='artistsData'>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Artist Name</th>
                                <th>DOB</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((e, key) => {
                                    return <tr>
                                        <td>{key + 1}</td>
                                        <td>{e.name}</td>
                                        <td>{e.dob}</td>
                                        <td>{e.rating}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div> : <h2 style={{ margin: "auto", width: 300, textAlign: "center", marginTop: 100 }} >Login OR Register</h2>
            }
        </>
    )
}
