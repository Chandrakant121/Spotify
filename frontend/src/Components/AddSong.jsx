import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Style.css"

export const AddSong = () => {
    let datastore = JSON.parse(localStorage.getItem("logindetail"));
    const navigate = useNavigate()
    const [name, setName] = useState('')
    // const [artwork, setArtwork] = useState('')
    const [release_data, setRelease_Data] = useState('')
    const [rating, setRating] = useState('')
    const [artist, setArtist] = useState('')



    async function registerSong(event) {
        event.preventDefault()
        const res = await fetch('http://localhost:5000/song', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                // artwork,
                release_data,
                rating,
                artist
            }),
        })
        // const data = await res.json();
        // console.log(data)
        // if (data.status === 200) {
        //     alert("Song added")
        //     setArtwork("")
        //     setRelease_Data("")
        //     setRating("")
        //     setArtist("")
        //     return
        // }
        if (name != "" && artwork != "" && release_data != "" && rating != "" && artist != "") {
            alert("Song added")
            // setArtwork("")
            setRelease_Data("")
            setRating("")
            setArtist("")
            navigate("/songs")
            return

        }
        else {
            alert("Plese Fill all the details")
        }
    }

    return (
        <>
            <Navbar />
            {
                datastore ? <div className='login'>
                    <h1>Add Song</h1>
                    <form onSubmit={registerSong}>
                        <div>
                            <input
                                className='inputdiv'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Song Name"
                            />
                        </div>
                        {/* <div>
                        <input
                            className='inputdiv'
                            value={artwork}
                            onChange={(e) => setArtwork(e.target.value)}
                            type="text"
                            placeholder="Image_URL"
                        />
                    </div> */}

                        <div>
                            <input
                                className='inputdiv'
                                value={release_data}
                                onChange={(e) => setRelease_Data(e.target.value)}
                                type="date"
                                placeholder="release_data"
                            />
                        </div>
                        <div>
                            <input
                                className='inputdiv'
                                onChange={(e) => setRating(e.target.value)}
                                type="rating"
                                value={rating}
                                placeholder="rating"
                            />
                        </div>

                        <div>
                            <input
                                className='inputdiv'
                                value={artist}
                                onChange={(e) => setArtist(e.target.value)}
                                type="text"
                                placeholder="Artist Name"
                            />
                        </div>
                        <input className='inputdivbtn' type="submit" value="Add Song" />
                    </form>
                </div> : <h2 style={{ margin: "auto", width: 300, textAlign: "center", marginTop: 100 }} >Login OR Register</h2>}
        </>
    )
}
