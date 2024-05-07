import { getMovieDetails, getSimilarMovies } from "../../../../utils/requests";
import "@/app/style.css"
import Link from "next/link";
import Image from "next/image";

export default async function MovieDetailPage({ params }) {
  const IMAGE_BASE_URL = "https://media.themoviedb.org/t/p/w440_and_h660_face";
  const movieDetails = await getMovieDetails(params.id);
  const similarMovies= await getSimilarMovies(params.id)
  return (
    <div className="container py-3">
      <div className=" ">
        <div className="hero-sec d-flex ">
          <div className="hero-img" key={movieDetails.id}>
            <Image
              src={IMAGE_BASE_URL + movieDetails.poster_path}
              width={230}
              height={350}
              alt="A movie Poster Image"

            />
          </div>
          {/*  */}
          <div className="mx-3 movie-detail" key={movieDetails.id}>
            <h1>{movieDetails.title}</h1>
            <div className="d-flex detail-btns">
              <p className="release-date basic-btn p-2 me-2 bg-primary text-white rounded">
                {movieDetails.release_date}
              </p>
              <p className="language basic-btn p-2 bg-primary me-2 text-white rounded">
                {movieDetails.original_language}
              </p>
              <p className="status basic-btn p-2 bg-primary me-2 text-white rounded">
                {movieDetails.status}
              </p>
            </div>
            <div>
              <p>
                  {
                      movieDetails.genres.map((genre)=>{
                          return <span className="genres me-1 bg-dark text-white p-2 rounded" key={genre.id}>{genre.name}</span>
                      })
                  }
              </p>
            </div>
            <p className="overview">{movieDetails.overview}</p>
          </div>
        </div>            
      </div>
      {/* Similar Movies */}
      <div className="my-5 ">
        <h1 className="py-3 text-center">Similar Movies</h1>
        <div className="d-flex justify-content-center flex-wrap gap-3 "> 
        {
            similarMovies.map((movie)=>{
                return(
                  <div key={movie.id}>
                    {
                    (movie.poster_path)!==null?
                    <Link  className="text-decoration-none "
                    href={`/movies/${movie.id}`} key={movie.id}>
                    <div className="card " style={{ width: "12.3rem" }}>
                    <Image
                      className="card-image"
                      src={IMAGE_BASE_URL + movie.poster_path}
                      width={195}
                      height={300}
                      alt="A movie Poster Image"
                    />
                    <div
                      className="card-body overflow-y-auto"
                      style={{ height: "200px" }}
                    >
                      <h5 className="card-title">{movie.title}</h5>
                      <p className="card-text">{movie.overview}</p>
                    </div>
                  </div>
                    </Link>
                    :
                    null
                    }
                  </div>
                )
            })
        }
        </div>        
      </div>    

    </div>
  );
}
