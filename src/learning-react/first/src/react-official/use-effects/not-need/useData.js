import { useEffect, useState } from "react";

export default function useData(operation) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    operation().then((result) => {
      if (!ignore) {
        setData(result);
      }
    });
    return () => {
      ignore = true;
    };
  }, [operation]);

  return data;
}

// function useFetchData({ operationId, operation }) {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let ignore = false;

//     // Reset states when the ID changes
//     setIsLoading(true);
//     setData(null);
//     setError(null);

//     operation()
//       .then((result) => {
//         if (!ignore) {
//           setData(result);
//           setIsLoading(false);
//         }
//       })
//       .catch((err) => {
//         if (!ignore) {
//           setError(err);
//           setIsLoading(false);
//         }
//       });

//     return () => {
//       ignore = true;
//     };
//     // Adding operation here ensures the hook reacts if the logic changes
//   }, [operationId, operation]);

//   return { data, isLoading, error };
// }
