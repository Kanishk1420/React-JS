// Live Competitive Programming Leaderboard.
import { useState, useEffect, memo, useCallback, useMemo } from "react";

// 1. The Child Component (Needs memoization)
const PlayerList = memo(({ players, onKickPlayer }) => {
  console.log("PlayerList Rendered!");
  return (
    <ul>
      {players.map((player) => (
        <li key={player.id} style={{ padding: "8px", listStyle: "none" }}>
          {player.name} - {player.score} XP
          <button
            onClick={() => onKickPlayer(player.id)}
            style={{ marginLeft: "10px", cursor: "pointer" }}
          >
            Kick
          </button>
        </li>
      ))}
    </ul>
  );
});

const Leaderboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [players, setPlayers] = useState([
    { id: 1, name: "Alice", score: 1200 },
    { id: 2, name: "Bob", score: 950 },
    { id: 3, name: "Charlie", score: 1500 },
    { id: 4, name: "David", score: 1100 },
  ]);

  const topPlayers = useMemo(() => {
    return players
      .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .sort((a, b) => b.score - a.score);
  }, [players, searchQuery]);

  const handleKickPlayer = useCallback((id) => {
    setPlayers((prevPlayers) => prevPlayers.filter((p) => p.id !== id));
  }, []);
 const handleRestorePlayers = useCallback(() => {
    setPlayers(players);
  }, []);
  const logTopPlayer = useCallback(() => {
    if (topPlayers.length > 0) {
      console.log(`Ping Analytics: Current #1 is ${topPlayers[0].name}`);
    }
  }, []);

useEffect(() => {
  logTopPlayer();
}, [logTopPlayer]);

  return (
    <div
      style={{
        background: isDarkMode ? "#121212" : "#f0f0f0",
        color: isDarkMode ? "#00FF00" : "#000",
        padding: "20px",
        fontFamily: "monospace",
        minHeight: "100vh",
      }}
    >
      <h2>🏆 Live CP Leaderboard</h2>

      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</button>

      <div style={{ marginTop: "15px" }}>
        <input
          type="text"
          placeholder="Search coders..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: "8px", width: "200px" }}
        />
      </div>
      <PlayerList players={topPlayers} onKickPlayer={handleKickPlayer} />
      <button onClick={handleRestorePlayers}>Restore All Players</button>
    </div>
  );
};

export default Leaderboard;
