import React, { useState } from "react";

const Cond = () => {
  const [count, setCount] = useState(["a"]);

  return (
    <div>
      {count.length > 0 ? (
        <p>You have {count.length} unread messages.</p>
      ) : (
        <p>No new messages</p>
      )}
    </div>
  );
};

export default Cond;
