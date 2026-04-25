import { supabase } from "./supabase";

export async function getAllProducts() {
  const { data, error } = await supabase
    .from("products")
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

export async function getLaptops() {
  const { data, error } = await supabase
    .from("products")
    .select("id,name,brand,price,image,category")
    .eq("category", "laptop")
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getSmartphones() {
  const { data, error } = await supabase
    .from("products")
    .select("id,name,brand,price,image,category")
    .eq("category", "smartphone")
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getAccessories() {
  const { data, error } = await supabase
    .from("products")
    .select("id,name,brand,price,image,category")
    .eq("category", "accessories")
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getGaming() {
  const { data, error } = await supabase
    .from("products")
    .select("id,name,brand,price,image,category")
    .eq("category", "gaming")
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getDesktop() {
  const { data, error } = await supabase
    .from("products")
    .select("id,name,brand,price,image,category")
    .eq("category", "desktop")
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
