import { Database } from '../lib/database.types';

type Deal = Database['public']['Tables']['deals']['Row'] & {
  tags: string[];
};

type SortOption = 'Latest' | 'Price: Low to High' | 'Price: High to Low';

export function sortDeals(deals: Deal[], sortBy: SortOption): Deal[] {
  const sortedDeals = [...deals];

  switch (sortBy) {
    case 'Latest':
      return sortedDeals.sort((a, b) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    
    case 'Price: Low to High':
      return sortedDeals.sort((a, b) => a.price - b.price);
    
    case 'Price: High to Low':
      return sortedDeals.sort((a, b) => b.price - a.price);
    
    default:
      return sortedDeals;
  }
}