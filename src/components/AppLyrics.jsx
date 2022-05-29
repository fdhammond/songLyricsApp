import Form from "./Form";
import Alert from "./Alert";
import Lyric from "./Lyric";
import useLyrics from "../hooks/useLyrics";

const AppLyrics = () => {

    const { alert, lyric, loading } = useLyrics()

    return (
        <>

            <header>Search Song Lyrics</header>

                <Form />

            <main>
                {alert  ?
                    <Alert>{alert}</Alert>
                        :
                    lyric
                        ?
                    <Lyric />
                        :
                    loading ? 'Loading...'
                        :
                    <p className="text-center">
                        Search your favorite Artist lyrics
                    </p>
                }
            </main>
        </>
    );
};

export default AppLyrics;