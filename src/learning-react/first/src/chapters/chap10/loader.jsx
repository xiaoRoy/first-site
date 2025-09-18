import "./styles/loader.css";

const { useReducer, useEffect } = require("react");

const LOADING_STATUS = {
  INITIALIZE: "initialize",
  LOADING: "loading",
  FAILURE: "failure",
  SUCCESS: "success",
};

const INITIAL_LOAD_STATE = {
  status: LOADING_STATUS.INITIALIZE,
  result: null,
  error: null,
};

function loaderReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case LOADING_STATUS.LOADING:
      return { ...state, status: type };
    case LOADING_STATUS.FAILURE:
      return { ...state, status: type, error: payload };
    case LOADING_STATUS.SUCCESS:
      return { ...state, status: type, result: payload };
    case LOADING_STATUS.INITIALIZE:
      return { ...state };
    default:
      unknownError(type);
  }
}

function Loader() {
  URL = "https://www.swapi.tech/api/films";
  const [state, dispatch] = useReducer(loaderReducer, INITIAL_LOAD_STATE);
  useEffect(() => {
    dispatch({ type: LOADING_STATUS.LOADING });
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error(`Unexpected content-type: ${contentType}`);
        }
        return response.json();
      })
      .then((responseJson) => {
        const movies =
          responseJson?.result?.map(
            (movieProperty) => movieProperty?.properties?.title ?? ""
          ) ?? [];
        dispatch({
          type: LOADING_STATUS.SUCCESS,
          payload: movies,
        });
      })
      .catch((error) => {
        dispatch({
          type: LOADING_STATUS.FAILURE,
          payload: error.message,
        });
      });
  }, []);
  const { status, result, error } = state;
  return (
    <>
      {status === LOADING_STATUS.SUCCESS ? (
        <StartWarMovieList movies={result}></StartWarMovieList>
      ) : (
        <LoadingStatus status={status} error={error}></LoadingStatus>
      )}
    </>
  );
}

function StartWarMovieList({ movies }) {
  return (
    <div className="container">
      <h1>Start Wars</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

function LoadingStatus({ status, error }) {
  let message = "";
  switch (status) {
    case LOADING_STATUS.INITIALIZE:
      message = "Initializing...";
      break;
    case LOADING_STATUS.LOADING:
      message = "Loading...";
      break;
    case LOADING_STATUS.FAILURE:
      message = `Error occurred: ${error}`;
      break;
    default:
      unknownError(status);
  }
  return <h1>{message}</h1>;
}

function unknownError(status) {
  throw new Error(`Unknown status:${status}`);
}

export default function LoaderDemo() {
  return <Loader></Loader>;
}
