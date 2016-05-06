// Recursively traverses the comment tree to update the appropriate comment by ID
export const recursiveMap = (comment, comments) =>
  comments.map(current => {
    if (current.comments) {
      recursiveMap(comment, current.comments);
    }
    if (current.id === comment.id) {
      return Object.assign(current, comment);
    }
    return current;
  });

// Recursively traverses the comment tree to count total number of comments
export const recursiveCount = (comments) => {
  let count = 0;

  function countArray(commentArray) {
    commentArray.map(comment => {
      if (comment.comments) {
        countArray(comment.comments);
      }
      if (comment.deleted) return count;
      return count++;
    });
  }
  countArray(comments);
  return count;
};
