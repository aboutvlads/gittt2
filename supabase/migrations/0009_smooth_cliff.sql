/*
  # Update deal images and add new destinations

  1. Changes
    - Update existing deal images with new travel poster style images
    - Add new destinations (Oslo, Ethiopia)
    - Update departure cities to match the images

  2. Security
    - Maintains existing RLS policies
*/

-- Update existing deals with new images and routes
UPDATE deals
SET 
  image_url = CASE destination
    WHEN 'Amsterdam' THEN 'https://images.unsplash.com/photo-1612521605237-0024ec952cc5?auto=format&fit=crop&w=800&q=80'
    WHEN 'Rome' THEN 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80'
    ELSE image_url
  END,
  departure = CASE destination
    WHEN 'Amsterdam' THEN 'JFK, New York'
    WHEN 'Rome' THEN 'SFO, San Francisco'
    ELSE departure
  END
WHERE destination IN ('Amsterdam', 'Rome');

-- Add new destinations
INSERT INTO deals (
  destination, 
  country, 
  flag, 
  image_url, 
  price, 
  original_price, 
  discount, 
  departure, 
  stops, 
  type,
  departure_time,
  arrival_time,
  flight_duration
) VALUES
(
  'Oslo',
  'Norway',
  '🇳🇴',
  'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=80',
  299,
  545,
  '45% off',
  'EWR, Newark',
  'Jan-Feb • 1 stop',
  'Economy',
  '14:30 PM',
  '07:45 AM',
  '7h 15m'
),
(
  'Ethiopia',
  'Ethiopia',
  '🇪🇹',
  'https://images.unsplash.com/photo-1540866225557-9e4c58100c67?auto=format&fit=crop&w=800&q=80',
  899,
  1635,
  '45% off',
  'ORD, Chicago',
  'Feb-Mar • 1 stop',
  'Business',
  '20:15 PM',
  '16:30 PM',
  '13h 15m'
);

-- Add tags for new destinations
INSERT INTO deal_tags (deal_id, tag)
SELECT id, '#adventure' FROM deals WHERE destination = 'Oslo'
UNION ALL
SELECT id, '#nature' FROM deals WHERE destination = 'Oslo'
UNION ALL
SELECT id, '#culture' FROM deals WHERE destination = 'Ethiopia'
UNION ALL
SELECT id, '#history' FROM deals WHERE destination = 'Ethiopia';