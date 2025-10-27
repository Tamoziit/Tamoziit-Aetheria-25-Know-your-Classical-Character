import { characters } from "../data/characters.js";

export const syncAllCharactersToLeaderboard = () => {
  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

  // Map current leaderboard by ID for quick lookup
  const existingMap = new Map(leaderboard.map(entry => [entry.id, entry]));

  // Ensure every character exists
  characters.forEach(character => {
    if (!existingMap.has(character.id)) {
      leaderboard.push({
        id: character.id,
        name: character.name,
        title: character.title,
        image: character.image,
        appearances: 0,
        frequency: 0,
      });
    }
  });

  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  console.log("✅ Leaderboard synced with all characters.");
};