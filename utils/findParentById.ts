export default function findParentById(reviews: any, targetId: number) {
  for (const review of reviews) {
    if (review.id === targetId) {
      return review;
    }

    if (review.children && review.children.length > 0) {
      const parentInChild: any = findParentById(review.children, targetId);
      if (parentInChild) {
        return parentInChild;
      }
    }
  }

  return null;
}