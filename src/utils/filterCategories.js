const categoryNames = [
  {
    name: 'History',
    icon: 'book'
  },
  {
    name: 'Science',
    icon: 'sci-fi'
  },
  {
    name: 'Geography',
    icon: 'locations'
  },
  {
    name: 'Animals',
    icon: 'bird'
  },
  {
    name: 'Entertainment',
    icon: 'theatre'
  },
  {
    name: 'Mythology',
    icon: 'griffin'
  }
];

export default (categories) => {
  const categoryData = [];

  for (let cat of categoryNames) {
    const list = categories.filter(category => category.name.startsWith(cat.name));
    const itemIds = list.length > 1 
        ? list.map(item => item.id)
        : list[0].id;
    categoryData.push({ name: cat.name, id: itemIds, icon: cat.icon });
  }
  return categoryData;
}
