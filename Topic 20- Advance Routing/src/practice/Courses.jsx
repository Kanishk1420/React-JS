import React from "react";
import { useLocation, useSearchParams, Link } from "react-router-dom";

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const filterType = searchParams.get("type"); // Get the current filter

  return (
    <div>
      <h1> Courses Directory</h1>
      <p>Current pathname is: {location.pathname}</p>
      
      {/* Set the Query Strings */}
      <button onClick={() => setSearchParams({ type: "free" })}>
        Show Free Courses Only
      </button>
      <button onClick={() => setSearchParams({})}>
        Show All Courses
      </button>

      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        
        {(!filterType || filterType === "free") && (
           <Link to="/dashboard/courses/react-19-basics" style={{ color: 'blue' }}>
             React 19 Basics - $0
           </Link>
        )}
        {!filterType && (
           <Link to="/dashboard/courses/react-19-advance" style={{ color: 'blue' }}>
             React 19 Advance - $99
           </Link>
        )}
      </div>
    </div>
  );
}

export default Courses;