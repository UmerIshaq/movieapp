import { getMovies } from "../../../../utils/requests";
import Link from "next/link";
import Image from "next/image";

export default async function SearchPage({searchParams}){
    const IMAGE_BASE_URL = "https://media.themoviedb.org/t/p/w440_and_h660_face";
    const searchText=searchParams.query;
    const movies=await getMovies(searchText)
    return(
      <div>
        <div className="container ">
          <div className="">
            <h1 className="pb-5 py-5 text-center">Top Search Results For &quot;{searchText}&quot;</h1>
            <div className="d-flex justify-content-center flex-wrap gap-3  py-3">
              {movies.results.map((movie) => {
                return (
                    (movie.poster_path)!==null?
                    <div key={movie.id}>
                    <Link
                      className="text-decoration-none "
                      href={`/movies/${movie.id}`}
                    >
                      <div className="card " style={{ width: "12.3rem" }} key={movie.id}>
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
                  </div>
                  :null
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
}