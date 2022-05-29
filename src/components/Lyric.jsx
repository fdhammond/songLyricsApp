import useLyrics from "../hooks/useLyrics";

const Lyric = () => {
    const { lyric, loading } = useLyrics()

    return (
        loading ? 'Loading...' : <div className="letra">{lyric}</div>
    );
};

export default Lyric;