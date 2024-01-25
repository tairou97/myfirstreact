import Youtube from "./youtube";

function App() {
  const userName = "John Doe";
  return (
    <>
      <h1> Vite React App Ist Great{2 * 2}</h1>
      <h1> Vite React App Ist Great {userName}</h1>
      <Youtube />
      <Youtube />
      <Youtube />
    </>
  );
}

export default App;
