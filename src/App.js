import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Heading from "./components/pageNavigations/Heading";
import FlashCardGroup from "./components/flashcards/AllFlashCards";
import DetailedFlashCards from "./components/flashcards/DetailedFlashCards";
import { useSelector } from "react-redux";
import Createbutton from "./components/mainflashcards/CreateButton";

function App() {

  const flashstate = useSelector(state => state.Reducer.default)
  return (
    <BrowserRouter>
      <div className="h-screen">
        <Navbar />
        <div className='px-0 lg:px-40 sm:px-8'>
          <Heading />
          <Routes>
            <Route path="/" element={<Createbutton />} />
            <Route path="/flashcardgroup" element={<FlashCardGroup />} />
            <Route path={`/flashCard${flashstate}`} element={<DetailedFlashCards />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;