import React from "react";
import ReviewList from "./Components/ReviewList";
import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Review Sentiment Analysis</h1>
        <ReviewList />
      </div>
    </div>
  );
};

export default App;




