import MainLayout from "@/layouts/mainLayout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FaPlay, FaHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";
import Track from "@/components/track";
import Head from "next/head";
import styles from "../../styles/Album.module.scss";

export default function Album() {
  const router = useRouter();
  const [albumTitle, setAlbumTitle] = useState({});

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    fetch(`https://api.spotify.com/v1/albums/${router.query.title}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAlbumTitle(data));
  }, [router.query.title]);

  return (
    <MainLayout>
      <>
        <Head>
          <title>Spotify Next</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="icon"
            href="https://img.icons8.com/ios-filled/50/1DB954/spotify.png"
            alt="spotify"
          />
        </Head>
        {Object.keys(albumTitle).length > 1 ? (
          <>
            <div className={styles.Album}>
              <div className={styles.cover}>
                {albumTitle.images.length > 1 ? (
                  <img
                    src={albumTitle.images[1].url}
                    alt=""
                    className={styles.pic}
                  />
                ) : (
                  <img
                    src={albumTitle.images[0].url}
                    alt=""
                    className={styles.pic}
                  />
                )}
                <h2 className={styles.title}>{albumTitle.name}</h2>
              </div>

              <div className={styles.Info}>
                <h6 className={styles.artist_name}>
                  {albumTitle.artists[0].name}
                </h6>
                <VscCircleFilled className={styles.bullet} />
                <p>{albumTitle.release_date.slice(0, 4)}</p>
                <VscCircleFilled className={styles.bullet} />
                <p>{albumTitle.total_tracks} brani</p>
              </div>

              <div className={styles.icons}>
                <FaPlay className={styles.icon} />
                <FaHeart className={styles.icon} />
              </div>

              <div className={styles.listIntro}>
                <p>#</p>
                <p>Title</p>
                <MdOutlineTimer />
              </div>

              <div>
                {Object.keys(albumTitle).length > 0 ? (
                  albumTitle.tracks.items.map((track, key) => (
                    <Track
                      trackData={track}
                      haveImage={false}
                      key={key}
                      id={key}
                    />
                  ))
                ) : (
                  <h1>Loading...</h1>
                )}
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </>
    </MainLayout>
  );
}
