import React, { useState } from "react";

const ItemListManager = () => {
  const [items, setItems] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() === "") {
      return;
    }

    setItems([...items, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#2c3e50",
          padding: "10px 20px",
          color: "white",
        }}
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEUNFB4A6mT///8AAAANABcGulIA7mUJERsNABsAABHs7e0ExFYKaTXKyssAAAv8/PyHiIlzdHVXWFgACBQNChysra3R0dJPUFNDREfDw8QIikEGsU8MQCgA82een6CQkZJ/lJKPAAAAv0lEQVR4nO3ZSQrCQBBAUU3UJM4aNc7e/5aKogkEieBAI+8tqzZ/1w3VagEAAAAAAAB/La7IKvO8uriN0s4LFp9oWo4eVkVZla835WJ0rUq33Wa7/ftVSdaPStP4sRjPKvMoTi6jzuDQazZMvxk1qUf12s1EiRIlSpQoUaJ+FpXdxcFEHYv5XXEKJeopUaJEiRIl6k+jgnyQg/y6BPrJEyVKlChRokSJaoyK6lE/Oq0FeYQM81wLAAAAAAAAhOkMIbYzDQo+04cAAAAASUVORK5CYII="
          alt="logo"
          style={{ width: "40px", height: "40px", marginRight: "10px" }}
        />
        <h1 style={{ margin: 0, color: "#2ecc71" }}>Item List Manager</h1>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Item List</h1>

        <input
          type="text"
          placeholder="Enter item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
        <br />

        <button
          onClick={handleAddItem}
          style={{
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          Add Item
        </button>
        <div>
          <ul
            style={{
              marginTop: "20px",
              listStyle: "disc",
              paddingLeft: "40px",
              textAlign: "left",
              display: "inline-block",
            }}
          >
            {items.map((item, index) => (
              <li
                key={index}
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#333",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemListManager;
