
import useLocalStorage from "./useLocalStorage";

function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<number[]>(
    "tripora-favorites",
    []
  );

  function toggleFavorite(id: number) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function isFavorite(id: number) {
    return favorites.includes(id);
  }

  return { favorites, toggleFavorite, isFavorite };
}

export default useFavorites;
