import { useState, useEffect } from "react";
import MovieCard from "../../../../components/Systems/Movies/MovieCard/MovieCard";
import { api, apiKey } from "../../../../api/urls/movies";
import type { IMovieData, IMoviesResponse } from "../../../../interfaces/systems/movies";
import Div from "../../../../components/Html/Div/Div";
import Header2 from "../../../../components/Html/Header2/Header2";
import Paragraph from "../../../../components/Html/Paragraph/Paragraph";
import './Home.css'

const HomeMovie: React.FC = () => {
    const [topMovies, setTopMovies] = useState<IMovieData[] | []>([])

    const getTopRatedMovies = async (url: string) => {
        const res = await fetch(url)
        const data: IMoviesResponse = await res.json()

        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedUrl = `${api}top_rated?${apiKey}`
        getTopRatedMovies(topRatedUrl)
    }, [])

    return (
        <Div className="align">
            <Div className="container">
                <Header2 text="Top Filmes" className="title" />
                <Div className="movies-container">
                    {topMovies.length === 0 && <Paragraph text="Carregando..." />}
                    {topMovies.length > 0 && topMovies.map((movie: IMovieData) => <MovieCard key={movie.id} movie={movie} />)}
                </Div>
            </Div>
        </Div>
    )
}

export default HomeMovie