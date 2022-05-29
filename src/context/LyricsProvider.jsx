import { useState, createContext } from "react";
import axios from "axios";

const LyricsContext = createContext();

const LyricsProvider = ({ children }) => {

    const [alert, setAlert] = useState('')
    const [lyric, setLyric] = useState('')
    const [loading, setLoading] = useState(false)

    const searchLyrics = async (searchLyrics) => {
        setLoading(true)
        try {
            const { artist, song } = searchLyrics;
            const url = `https://api.lyrics.ovh/v1/${artist}/${song}`
            //Destructuring to data from axios result implementation
            const { data } = await axios(url)
            setLyric(data.lyrics)
            //We hide alert only if the artist/song are correct
            setAlert('')
        } catch (error) {
            setAlert('Song not found')
        }
        setLoading(false)
    }

    return (
        <LyricsContext.Provider
            value={{
                alert,
                setAlert,
                searchLyrics,
                lyric,
                loading
        }}
        >
            {children}
        </LyricsContext.Provider>
    )
}

export {
    LyricsProvider
}

export default LyricsContext;