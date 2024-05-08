import { Suspense } from "react";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div />}>
          <Router />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
