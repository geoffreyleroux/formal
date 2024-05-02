import { Category, Application, Tabs } from "./types";

export const getNextTab = (current: Tabs): Tabs => {
  const values = Object.values(Tabs);
  const map = new Map(values.map((k, i) => [k, values[i + 1] || Tabs.All]));
  return map.get(current) || Tabs.All;
};

export const getPrevTab = (current: Tabs): Tabs => {
  const values = Object.values(Tabs);
  const map = new Map(values.map((k, i) => [k, values[i - 1] || Tabs.Settings]));
  return map.get(current) || Tabs.Settings;
};

export const getNextApp = (
  currentData: Application,
  categories: Category[]
): Application => {
  const currentCategory =
    categories.find((c) => c.applications.find((d) => d.title === currentData.title)) ||
    categories[0];

  const currentDataIndex = currentCategory.applications.findIndex(
    (c) => c.title === currentData.title
  );
  const nextDataIsInCategory =
    currentDataIndex !== currentCategory.applications.length - 1;
  if (nextDataIsInCategory) {
    return currentCategory.applications[currentDataIndex + 1];
  }

  const currentCategoryIndex = categories.findIndex(
    (c) => c.title === currentCategory.title
  );
  const nextCategory = categories[currentCategoryIndex + 1] || categories[0];
  return nextCategory.applications[0];
};

export const getPreviousApp = (
  currentData: Application,
  categories: Category[]
): Application => {
  const currentCategory =
    categories.find((c) => c.applications.find((d) => d.title === currentData.title)) ||
    categories[0];

  const currentDataIndex = currentCategory.applications.findIndex(
    (c) => c.title === currentData.title
  );
  const prevDataIsInCategory = currentDataIndex !== 0;
  if (prevDataIsInCategory) {
    return currentCategory.applications[currentDataIndex - 1];
  }

  const currentCategoryIndex = categories.findIndex(
    (c) => c.title === currentCategory.title
  );
  const prevCategory =
    categories[currentCategoryIndex - 1] || categories[categories.length - 1];

  return prevCategory.applications[prevCategory.applications.length - 1];
};
