import React, { useState } from "react";

interface FaveProps {
  isFave: boolean;
  onFaveToggle: Function;
}

export const Fave = (props: FaveProps) => {
  const handleFaveClick = (event: React.MouseEvent) => {
    console.log("handling fave click for: ", event.target);
    props.onFaveToggle(event.target);
  };

  const queueClass = props.isFave ? "remove_from_queue" : "add_to_queue";

  return (
    <div className={`film-row-fave ${queueClass}`} onClick={handleFaveClick}>
      <p className="material-icons">{queueClass}</p>
    </div>
  );
};
