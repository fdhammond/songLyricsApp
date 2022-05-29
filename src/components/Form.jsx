import { useState } from 'react'
import useLyrics from '../hooks/useLyrics';

const Form = () => {

    const { setAlert, searchLyrics, setLyric } = useLyrics()

    const [search, setSearch] = useState({
        artist: '',
        song: ''
    })

    const handleSubmit = e => {
        e.preventDefault();

        if (Object.values(search).includes("")) {
            setAlert('Insert artist name and song')
            return
        }

        searchLyrics(search)
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <legend>Search by artist and Song</legend>

            <div className="form-grid">
                <div>
                    <label htmlFor="">Artist</label>
                    <input
                        type="text"
                        name="artist"
                        placeholder="Artist's name"
                        value={search.artist}
                        onChange={ e => setSearch({
                            ...search,
                            [e.target.name] : e.target.value
                        })}
                        />
                </div>
                <div>
                    <label htmlFor="">Song</label>
                    <input
                        type="text"
                        name="song"
                        placeholder="Song's name"
                        value={search.song}
                        onChange={ e => setSearch({
                            ...search,
                            [e.target.name] : e.target.value
                        })}
                        />
                </div>
                <input type="submit" value="search"/>
            </div>
        </form>
    );
};

export default Form;