# E-Commerce Pair Programming Test

## Overview

React 18 e-commerce application built with Vite, TypeScript, Redux Toolkit, and Tailwind CSS. Your task is to implement core features for product listing and shopping cart functionality.

## Design Reference

- [Figma Design](https://www.figma.com/design/uB2eqpBuZohpVB4FmDxYKi/Software-Challenge?node-id=23-975&t=Equsrs2LhZRH7kzK-0)

## Tech Stack

- **React 18** with TypeScript
- **Redux Toolkit** for state management
- **React Router** for routing
- **Tailwind CSS** for styling
- **Vite** as build tool
- **Vitest** for testing

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev    # http://localhost:5173

# Run tests
npm test

# Build for production
npm run build
```

## Project Structure

```
src/
  ├── app/
  │   ├── store.ts        # Redux store (configured)
  │   └── hooks.ts        # Typed Redux hooks
  ├── features/
  │   ├── products/
  │   │   ├── productsSlice.ts   # TODO: Implement
  │   │   └── ProductsList.tsx   # TODO: Complete
  │   └── cart/
  │       ├── cartSlice.ts       # TODO: Implement
  │       └── CartWidget.tsx     # Shows cart count
  ├── components/
  │   └── ProductCard.tsx        # Product card component
  └── App.tsx                    # Main layout
```

---

## Tasks to Implement

### Task 1: Fetch Products from API

**File:** `src/features/products/productsSlice.ts`

Fetch products from the API and manage the loading states appropriately.

**API:** `https://fakestoreapi.com/products`

**File:** `src/features/products/ProductsList.tsx`

Display the products on the page.

### Task 2: Implement Shopping Cart

**File:** `src/features/cart/cartSlice.ts`

Implement cart functionality:

- Add products to cart
- Remove products from cart
- Update product quantities
- Calculate cart total

**File:** `src/features/products/ProductsList.tsx`

Connect the "Add to Cart" button functionality.

---

## API Reference

**Endpoint:** `https://fakestoreapi.com/products`

**Response:**
```json
[
  {
    "id": 1,
    "title": "Product Name",
    "price": 109.95,
    "description": "Product description",
    "category": "electronics",
    "image": "https://..."
  }
]
```

---

## Evaluation Criteria

- ✅ **Functionality**: Features work as expected
- ✅ **Code Quality**: Clean, readable, well-organized
- ✅ **TypeScript**: Proper typing, avoid `any`
- ✅ **Redux**: Correct use of slices, thunks, actions
- ✅ **Error Handling**: Loading and error states
- ✅ **Best Practices**: Follow React and Redux patterns

---

## Bonus Challenges (Optional)

- Add loading skeletons for better UX
- Implement product search/filter
- Add quantity controls in cart
- Show cart total in widget
- Persist cart to localStorage
- Write additional tests

---

## Resources

- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [React Docs](https://react.dev/)
- [Fake Store API](https://fakestoreapi.com/)

Good luck! 🚀
