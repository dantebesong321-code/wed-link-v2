export interface Category {
  id: string;
  name: string;
}

export interface Vendor {
  id: string;

  name: string;
  businessName: string;
  description: string;

  email?: string;
  phone?: string;
  website?: string;

  address: string;
  city: string;
  country: string;

  imageUrl?: string;

  galleryUrls: string[];

  services: string[];

  priceRange?: string;

  categoryId: string;

  category: Category;

  createdAt: string;
}