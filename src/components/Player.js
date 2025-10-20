import React, { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function toggleEditing() {
    //   goodPractice
    // funziona lo stesso solo che è leggermente più lento
    // setIsEditing(!isEditing);
      setIsEditing((edit) => !edit);
      if (isEditing) {
        onChangeName(symbol, playerName)
      }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function reset() {
    setPlayerName(name);
    setIsEditing(false);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {!isEditing ? (
          <>
            <span className="player-name">{playerName}</span>
            <button onClick={toggleEditing}>Edit</button>
            <button onClick={reset}>Reset</button>
          </>
        ) : (
          <>
            <input
              type="text"
              value={playerName}
              required
              onChange={handleChange}
            />
            <button onClick={toggleEditing}>Save</button>
            <button onClick={reset}>Reset</button>
          </>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
    </li>
  );
}
