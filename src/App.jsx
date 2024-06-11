
import Navigation from "./componets/Navigation";
import ModelView from "./componets/ModelView";
import Part from "./componets/Part";
import Reach from "./componets/Reach";
import Document from "./componets/Document";



const App = () => {
  
  return (
    <main >
      <div className="fixed w-full z-10">
        <Reach  />
      </div>
      <Part />
      <Navigation/>
      <ModelView/>
      <Document/>
    </main>
  )
}

export default App
