import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from "react";
import "./Style.css"

export const Songs = () => {
    let datastore = JSON.parse(localStorage.getItem("logindetail"));
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/song")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
            });
        console.log(data)
    }, []);

    return (
        <>
            <Navbar />
            {
                datastore ? <div className='SongData'>
                    <table>
                        <thead>
                            <tr>
                                <th>Cover Image</th>
                                <th>Song</th>
                                <th>Release Date</th>
                                <th>Artist</th>
                                <th>Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((e, key) => {
                                    return <tr>
                                        <td>{<img src={e.image} style={{ width: 200 }} />}</td>
                                        <td>{e.name}</td>
                                        <td>{e.release_data}</td>
                                        <td>{e.artist}</td>
                                        <td>{`${e.rating}/5`}</td>
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
