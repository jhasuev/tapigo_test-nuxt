export default function findMaxId(reviews: any) {
  let maxId = 0;

  for (const review of reviews) {
    if (review.id > maxId) {
      maxId = review.id;
    }

    if (review.children && review.children.length > 0) {
      const maxIdInChild = findMaxId(review.children);
      if (maxIdInChild > maxId) {
        maxId = maxIdInChild;
      }
    }
  }

  return maxId;
}