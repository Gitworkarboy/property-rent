import { useState } from "react";
import SelectPage from "./pages/selectPage";
import DetailsPage from "./pages/detailsPage";

function App() {
  const [pageName, setPageName] = useState("select");

  return (
    <div>
      {pageName === "select" && (
        <SelectPage toNextPage={() => setPageName("details")} />
      )}
      {pageName === "details" && (
        <DetailsPage toPreviousPage={() => setPageName("select")} />
      )}
    </div>
  );
}

export default App;
