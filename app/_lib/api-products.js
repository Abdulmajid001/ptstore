import { supabase } from "./supabase";

export async function getAllProducts() {
  const { data, error } = await supabase
    .from("products")
    // .select("id,name,brand,price, image, category")
    .select("id,name,brand,price,category")
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
    // return { success: false, error: error.message, data: null };
  }

  // return { success: true, error: null, data };
  return data;
}

export async function getProduct(productId) {
  const { data, error } = await supabase
    .from("products")
    .select(
      "id,name,brand,price,description,features,colors,sizes,image,imgArr",
    )
    .eq("id", productId)
    .single();

  if (error) {
    console.log("Error fetching product:", error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function getNikeProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("id,name,brand,price,brand, image")
    .eq("brand", "Nike")
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getNewBalanceProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("id,name,brand,price,brand, image")
    .eq("brand", "New Balance")
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getAdidasProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("id,name,brand,price,brand, image")
    .eq("brand", "Adidas")
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getPumaProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("id,name,brand,price,brand, image")
    .eq("brand", "Puma")
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getReebokProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("id,name,brand,price,brand, image")
    .eq("brand", "Reebok")
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getBrandProducts(brandFilter) {
  // console.log(brandFilter)
  let query = supabase
    .from("products")
    .select("id, name, brand, price, image")
    .order("name", { ascending: true });

  if (brandFilter && brandFilter !== "All") {
    query = query.eq("brand", brandFilter);
  }

  const { data, error } = await query;

  // await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}

export async function getFeaturedProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("id,name,brand,price,image")
    .eq("isFeaturedProd", true)
    .order("created_at", { ascending: true })
    .limit(10);

  if (error) {
    throw new Error(error.message);
  }
  return data;
}
