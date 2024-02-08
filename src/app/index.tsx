import { View, FlatList } from "react-native";

import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-button";
import { CATEGORIES } from "@/../utils/data/products";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  function handleCategorySelect(category: string) {
    setSelectedCategory(category);
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartItemsCount={5}></Header>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={selectedCategory === item}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
