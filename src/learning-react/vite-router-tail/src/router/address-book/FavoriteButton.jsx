import { useEffect, useState } from "react";

function FavoriteButton({ size, initIsFavorite, onFavoriteChanged }) {
  const [isFavorite, setFavorite] = useState([]);
  useEffect(() => setFavorite(initIsFavorite), [initIsFavorite]);
  const internalOnFavoriteChanged = (event) => {
    setFavorite(event.target.checked);
    if (onFavoriteChanged) {
      onFavoriteChanged(isFavorite);
    }
  };
  const sizeInClass = `w-[${size}px] h-[${size}px]`;
  const startRatio = 24 / 56;
  const starSize = size * startRatio;
  const styles = [
    "flex",
    "items-center",
    "justify-center",
    sizeInClass,
    "rounded-full",
    "border-2",
    "bg-gray-900",
    "p-3",
    "text-white",
    "favorite-focus",
    "favorite-hover",
    "transition-all",
    "duration-200",
    "ease-in-out",
  ].join(" ");
  return (
    <label
      id="favorite-label"
      aria-label="Toggle favorite status"
      className={styles}
    >
      <input
        type="checkbox"
        id="favorite-button"
        className="hidden"
        checked={isFavorite}
        onChange={internalOnFavoriteChanged}
        aria-hidden
      />

      <svg
        id="icon-star"
        className="favorite-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height={starSize}
        width={starSize}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          d="M 12 2 L 15.09 8.26 L 22 9.27 L 17 14.14 L 18.18 21.02 L 12 17.77 L 5.82 21.02 L 7 14.14 L 2 9.27 L 8.91 8.26 Z"
        />
      </svg>
    </label>
  );
}

function FavoriteButtonDemo() {
  const initFavorites = generateRandomBooleanArray(5);
  const [favorites, setFavorites] = useState(initFavorites);
  const resetFavorites = () => {
    setFavorites(generateRandomBooleanArray(5));
  };
  return (
    <div className="test">
      {favorites.map((favorite, index) => (
        <FavoriteButton
          initIsFavorite={favorite}
          key={index}
          size={100}
        ></FavoriteButton>
      ))}
      <button onClick={resetFavorites}>Reset</button>
    </div>
  );
}

function generateRandomBooleanArray(count) {
  // Ensure count is a non-negative integer
  if (count < 0 || !Number.isInteger(count)) {
    console.error("Count must be a non-negative integer.");
    return [];
  }

  // Array.from is used to create a new array of 'count' length.
  // The mapping function generates a random boolean for each element.
  const randomBooleanArray = Array.from({ length: count }, () => {
    // Math.random() returns a float between 0 (inclusive) and 1 (exclusive).
    // Comparing it to 0.5 gives a ~50% chance of returning true and ~50% chance of returning false.
    return Math.random() < 0.5;
  });

  return randomBooleanArray;
}

export { FavoriteButtonDemo, FavoriteButton };
