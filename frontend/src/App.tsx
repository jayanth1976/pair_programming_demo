import { BrowserRouter, Route, Routes } from "react-router-dom";
import SubmitBookForm from "./components/organisms/SubmitBookForm";
import TabsComponent from "./components/organisms/Tabs";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <SubmitBookForm /> */}
        <Routes>
          <Route path="/" element={<SubmitBookForm />} />
          <Route path="/view" element={<TabsComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
