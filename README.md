# SharePal Gaming Gadgets Clone

A recreation of the SharePal "Gaming Gadgets On Rent" page, built as part of the SharePal Software Engineer assignment.

**Live demo:** https://sharepal-clone-iota.vercel.app

## Tech stack
React, Vite, Tailwind CSS

## Features
- Header with city, delivery and pickup date pill
- Category tabs (Photography, Gaming, Outdoor, Entertainment) with theme colours
- Sidebar categories and banner per category
- Responsive product grid with Show More
- Product cards: tags, hover animation, wishlist heart, out-of-stock state
- "Vote to Launch" waitlist card with progress bar
- Rental date picker modal (two-month calendar, rental days count)
- Prices stay hidden until dates are selected, then update as per-day rent x days

## My improvements
- Image fallback when an image fails to load
- Lazy-loaded images
- Smooth modal and hover transitions

## Notes
- Product data comes from the provided `product-list.json` (Gaming only).
- Brand logos and banner artwork are not included.

## Run locally
npm install
npm run dev