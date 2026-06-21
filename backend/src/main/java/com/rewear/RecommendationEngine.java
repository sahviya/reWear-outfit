package com.rewear;
import java.util.*;

public class RecommendationEngine {
    
    // Recommend products based on category using HashMap for grouping
    public static List<Product> recommendByCategory(List<Product> allProducts, String preferredCategory) {
        Map<String, List<Product>> categoryMap = new HashMap<>();
        
        // Group products by category
        for (Product product : allProducts) {
            String category = product.getCategory();
            if (!categoryMap.containsKey(category)) {
                categoryMap.put(category, new ArrayList<>());
            }
            categoryMap.get(category).add(product);
        }
        
        // Return products from preferred category
        List<Product> recommendations = categoryMap.getOrDefault(preferredCategory, new ArrayList<>());
        
        // Sort by rental price (ascending)
        recommendations.sort(Comparator.comparingDouble(Product::getDailyRentalPrice));
        
        return recommendations;
    }
    
    // Recommend products based on price range
    public static List<Product> recommendByPriceRange(List<Product> allProducts, double minPrice, double maxPrice) {
        List<Product> filteredProducts = new ArrayList<>();
        
        for (Product product : allProducts) {
            double price = product.getDailyRentalPrice();
            if (price >= minPrice && price <= maxPrice) {
                filteredProducts.add(product);
            }
        }
        
        // Sort by price ascending
        Collections.sort(filteredProducts, Comparator.comparingDouble(Product::getDailyRentalPrice));
        
        return filteredProducts;
    }
    
    // Recommend products based on brand
    public static List<Product> recommendByBrand(List<Product> allProducts, String preferredBrand) {
        List<Product> recommendations = new ArrayList<>();
        
        for (Product product : allProducts) {
            if (product.getBrand() != null && product.getBrand().equalsIgnoreCase(preferredBrand)) {
                recommendations.add(product);
            }
        }
        
        // Sort by rental price
        recommendations.sort(Comparator.comparingDouble(Product::getDailyRentalPrice));
        
        return recommendations;
    }
    
    // Recommend top N products by rental price (cheapest first)
    public static List<Product> recommendTopProducts(List<Product> allProducts, int topN) {
        List<Product> sortedProducts = new ArrayList<>(allProducts);
        
        // Sort by rental price ascending
        Collections.sort(sortedProducts, Comparator.comparingDouble(Product::getDailyRentalPrice));
        
        // Return top N
        if (sortedProducts.size() > topN) {
            return sortedProducts.subList(0, topN);
        }
        
        return sortedProducts;
    }
    
    // Recommend products similar to a given product (same category)
    public static List<Product> recommendSimilarProducts(List<Product> allProducts, Product referenceProduct) {
        List<Product> similarProducts = new ArrayList<>();
        
        for (Product product : allProducts) {
            if (product.getProductId() != referenceProduct.getProductId() &&
                product.getCategory() != null &&
                product.getCategory().equals(referenceProduct.getCategory())) {
                similarProducts.add(product);
            }
        }
        
        // Sort by rental price
        similarProducts.sort(Comparator.comparingDouble(Product::getDailyRentalPrice));
        
        return similarProducts;
    }
    
    // Get popular categories (categories with most products)
    public static List<String> getPopularCategories(List<Product> allProducts) {
        Map<String, Integer> categoryCount = new HashMap<>();
        
        // Count products per category
        for (Product product : allProducts) {
            String category = product.getCategory();
            categoryCount.put(category, categoryCount.getOrDefault(category, 0) + 1);
        }
        
        // Convert to list and sort by count descending
        List<Map.Entry<String, Integer>> categoryEntries = new ArrayList<>(categoryCount.entrySet());
        categoryEntries.sort((e1, e2) -> e2.getValue().compareTo(e1.getValue()));
        
        // Extract category names
        List<String> popularCategories = new ArrayList<>();
        for (Map.Entry<String, Integer> entry : categoryEntries) {
            popularCategories.add(entry.getKey());
        }
        
        return popularCategories;
    }
    
    // Recommend products based on multiple criteria (category and price)
    public static List<Product> recommendByCriteria(List<Product> allProducts, String category, double maxPrice) {
        List<Product> recommendations = new ArrayList<>();
        
        for (Product product : allProducts) {
            if (product.getCategory() != null &&
                product.getCategory().equalsIgnoreCase(category) &&
                product.getDailyRentalPrice() <= maxPrice) {
                recommendations.add(product);
            }
        }
        
        // Sort by price ascending
        recommendations.sort(Comparator.comparingDouble(Product::getDailyRentalPrice));
        
        return recommendations;
    }
}
