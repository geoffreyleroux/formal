import { Category, Tabs, Action, Command, Application } from "./types";

export const getNextTab = (current: Tabs): Tabs => {
  const values = Object.values(Tabs);
  const map = new Map(values.map((k, i) => [k, values[i + 1] || Tabs.All]));
  return map.get(current) || Tabs.All;
};

export const getPrevTab = (current: Tabs): Tabs => {
  const values = Object.values(Tabs);
  const map = new Map(
    values.map((k, i) => [k, values[i - 1] || Tabs.Settings])
  );
  return map.get(current) || Tabs.Settings;
};

export const getNextAction = (
  type: "applications" | "commands",
  categories: Category[],
  current?: Action
): Action => {
  if (!current) return categories[0][type][0];

  const currentCategory =
    categories.find((c) => c[type]?.find((d) => d.title === current.title)) ||
    categories[0];

  const currentIndex = currentCategory[type].findIndex(
    (c) => c.title === current.title
  );
  const nextDataIsInCategory =
    currentIndex !== currentCategory[type].length - 1;
  if (nextDataIsInCategory) {
    return currentCategory[type][currentIndex + 1];
  }

  const currentCategoryIndex = categories.findIndex(
    (c) => c.title === currentCategory.title
  );
  const nextCategory = categories[currentCategoryIndex + 1] || categories[0];
  return nextCategory[type][0];
};

export const getPreviousAction = (
  type: "applications" | "commands",
  categories: Category[],
  current?: Action
): Action => {
  if (!current) return categories[0][type][0];

  const currentCategory =
    categories.find((c) => c[type].find((d) => d.title === current.title)) ||
    categories[0];

  const currentIndex = currentCategory[type].findIndex(
    (c) => c.title === current.title
  );
  const prevDataIsInCategory = currentIndex !== 0;
  if (prevDataIsInCategory) {
    return currentCategory[type][currentIndex - 1];
  }

  const currentCategoryIndex = categories.findIndex(
    (c) => c.title === currentCategory.title
  );
  const prevCategory =
    categories[currentCategoryIndex - 1] || categories[categories.length - 1];

  return prevCategory[type][prevCategory[type].length - 1];
};
