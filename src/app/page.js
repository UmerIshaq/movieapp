import Link from "next/link";
import { getTrendingMovies } from "../../utils/requests";

export default async function HomePage() {
  const movies = await getTrendingMovies();
  const IMAGE_BASE_URL = "https://media.themoviedb.org/t/p/w440_and_h660_face";
  return (
    <div>
      <div className="container ">
        <div className="">
          <h1 className="pb-3 py-3 text-center">Trending Movies</h1>
          <div className="d-flex flex-wrap align-items-center justify-content-center gap-3  py-3">
            {movies.map((movie) => {
              return (
                <div>
                  <Link
                    className="text-decoration-none "
                    href={`/movies/${movie.id}`}
                  >
                    <div className="card " style={{ width: "12.3rem" }}>
                      <img
                        className="card-image"
                        src={IMAGE_BASE_URL + movie.poster_path}
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
