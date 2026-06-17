import { useState } from "react";

const Card = () => {
  const author = "Author - GDK";
  
  // Set up your state at the top level
  const [text, setText] = useState("Welcome to the quotes generator! Click the button to generate quotes.");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // Use async/await for a clean fetch on click
  const handleClick = async () => {
    setIsPending(true); // Start loading
    setError(null);     // Clear any previous errors

    try {
      // PRO-TIP: The Advice Slip API caches responses. 
      // Adding `?t=${Date.now()}` tricks it into giving you a fresh quote every time!
      const response = await fetch(`https://api.adviceslip.com/advice?t=${Date.now()}`);
      
      if (!response.ok) {
        throw new Error("Could not fetch the quote");
      }
      
      const data = await response.json();
      setText(data.slip.advice); // Update the text with the new advice
      
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPending(false); // Stop loading regardless of success or failure
    }
  };

  return (
    <>
      <div className="text-card">
        {/* Conditional Rendering */}
        {error && <h2>{error}</h2>}
        {isPending && <h2>Loading...</h2>}
        
        {/* Only show the text if we aren't loading and have no errors */}
        {!isPending && !error && (
          <>
            <h1>"{text}"</h1>
            <span>{author}</span>
          </>
        )}
      </div>
      
      {/* Fixed onClick syntax, and disabled the button while fetching to prevent spam clicks */}
      <button onClick={handleClick} disabled={isPending}>
        {isPending ? "Fetching..." : "New Quote"}
      </button>
    </>
  );
};

export default Card;
