import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './player.module.css';
import Banner from '../../componentes/banner';
import placeholderImg from "./logo.png"

function Player() {
    const { id } = useParams();
    const [video, setVideo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/eilynginoe/AluraFlix/videos/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setVideo(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching video:', error);
                setError(error);
                setIsLoading(false);
            });
    }, [id]);

    if (isLoading) {
        return <p>Cargando video...</p>;
    }

    if (error) {
        return <p>Error al cargar el video: {error.message}</p>;
    }

    if (!video) {
        return <p>Video no encontrado</p>;
    }

    return (
        <>
            <Banner
                color="rgba(0, 0, 0, 0.5)"
                title="PLAYER"
                text=""
                placeholderImg={placeholderImg}
                height="300px"
            />
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </section>
        </>
    );
}

export default Player;
