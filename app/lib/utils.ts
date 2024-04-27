export function groupBy<ArrayElement, GroupId>(
  array: ArrayElement[],
  getKey: (v: ArrayElement) => GroupId | undefined,
  findElementIndex: (
    arr: {
      groupId: GroupId;
      elements: ArrayElement[];
    }[],
    key: GroupId
  ) => number
) {
  return array.reduce(
    (acc, curr) => {
      const key = getKey(curr);
      if (key) {
        const idx = findElementIndex(acc, key);
        if (idx < 0) {
          acc.push({
            groupId: key,
            elements: [curr],
          });
        } else {
          acc[idx]?.elements.push(curr);
        }
      }
      return acc;
    },
    [] as {
      groupId: GroupId;
      elements: ArrayElement[];
    }[]
  );
}
