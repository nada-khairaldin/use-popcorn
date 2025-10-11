import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

// import "./style.css";
import App from "./App.jsx";

import StarRating from "./components/StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <>
//       <StarRating color="blue" onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} starStyle</p>
//     </>
//   );
// }

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <StarRating
//       maxRating={5}
//       messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
//     />
//     <StarRating
//       maxRating={5}
//       color="#8a2828ff"
//       size={20}
//       className="test"
//       defaultRating={4}
//     />
//     <Test />
//   </StrictMode>
// );

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
