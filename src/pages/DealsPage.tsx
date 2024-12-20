import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DealCard } from '../components/DealCard';
import { SortMenu } from '../components/SortMenu';
import { useDeals } from '../hooks/useDeals';
import { sortDeals } from '../utils/sortDeals';
import { formatRelativeTime } from '../utils/dateUtils';

type SortOption = 'Latest' | 'Price: Low to High' | 'Price: High to Low';

export function DealsPage() {
  const [sortBy, setSortBy] = useState<SortOption>('Latest');
  const navigate = useNavigate();
  const { deals, loading, error } = useDeals();

  const handleDealSelect = (id: string) => {
    navigate(`/deal/${id}`);
  };

  const sortedDeals = sortDeals(deals, sortBy);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex items-center justify-center">
        <p className="text-gray-500">Loading deals...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold">Latest Deals</h1>
        <SortMenu sortBy={sortBy} onSort={setSortBy} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {sortedDeals.map((deal) => (
          <DealCard
            key={deal.id}
            id={deal.id}
            destination={deal.destination}
            country={deal.country}
            flag={deal.flag}
            image={deal.image_url}
            price={deal.price}
            originalPrice={deal.original_price}
            discount={deal.discount}
            date={formatRelativeTime(deal.created_at)}
            departure={deal.departure}
            stops={deal.stops}
            tags={deal.tags}
            likes={deal.likes}
            isHot={deal.is_hot}
            type={deal.type}
            onSelect={handleDealSelect}
          />
        ))}
      </div>
    </div>
  );
}