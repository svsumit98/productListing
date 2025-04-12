export const mockProducts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: ["Electronics", "Books", "Clothing"][i % 3],
  price: Math.floor(Math.random() * 1000)
}));
