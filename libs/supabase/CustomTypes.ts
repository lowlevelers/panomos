import { Product, ProductCategory, ProductPricingType, Profile } from '@/libs/supabase/types'

export type ExtendedProduct = Product & {
  product_pricing_types: ProductPricingType
  product_categories: ProductCategory[]
}

export type ExtendedComment = Comment & {
  user: {
    profile: Profile
  }
}