import React from 'react';

const Bookmark = ({ bookmarks }) => {
  return (
    <div>
      {bookmarks
        .filter(bm => !bm.children)
        .map(bm => {
          console.log(bm);
          return bm.title;
        })
        .join('')}
    </div>
  );
};

export default Bookmark;
