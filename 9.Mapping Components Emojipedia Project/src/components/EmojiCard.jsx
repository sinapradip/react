import React from "react";
import emojipedia from "../emojipedia";

function EmojiCard() {
  return (
    <>
      {emojipedia.map((emo, index) => (
        <dl className="dictionary">
          <div key={index} className="term">
            <dt>
              <span className="emoji" role="img" aria-label={emo.name}>
                {emo.emoji}
              </span>
              <span>{emo.name}</span>
            </dt>
            <dd>{emo.meaning}</dd>
          </div>
        </dl>
      ))}
    </>
  );
}

export default EmojiCard;
