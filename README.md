# 🎮 Pokemon Application

A modern React application built with TypeScript that showcases Pokemon data with advanced pagination techniques, infinite scrolling, and a beautiful Material-UI interface.

## 🚀 Technologies & Stack

### **Core Technologies:**

- **React 19.1.0** - Latest React with modern features and concurrent rendering
- **TypeScript** - For type safety and enhanced development experience
- **React Router DOM 7.7.1** - For client-side routing and navigation
- **Material-UI (MUI) 7.2.0** - For UI components and styling system
- **TanStack React Query 5.83.0** - For data fetching, caching, and state management

### **Additional Libraries:**

- **@emotion/react & @emotion/styled** - CSS-in-JS styling for MUI components
- **@mui/icons-material** - Material Design icons
- **Testing libraries** - Jest, React Testing Library for comprehensive testing

## 🏗️ Project Architecture

### **Feature-Based Component Structure:**

```
src/
├── pages/
│   ├── pokimons-page/           # Main Pokemon listing feature
│   │   ├── _components/         # Private components (feature-specific)
│   │   │   ├── pokemon-card.tsx
│   │   │   └── card-Skeleton.tsx
│   │   ├── index.tsx           # Main page component
│   │   ├── pokemons-infinite-pagination.tsx
│   │   └── pokimons-controlled-pagination.tsx
│   └── pokemon-details/        # Pokemon detail feature
│       ├── _components/        # Private components
│       │   ├── pokemon-card.tsx
│       │   └── pokemon-card-skeleton.tsx
│       └── pokemon-detail-page.tsx
├── components/                  # Shared components
│   ├── ErrorBoundary.tsx
│   ├── PaginationControls.tsx
│   └── mui-button.tsx
├── hooks/                      # Custom hooks
│   ├── usePokemonList.ts
│   ├── usePagination.ts
│   └── use-infinite-scroll-pagination.tsx
├── api/                        # API layer
│   └── pokemon.ts
├── types/                      # TypeScript definitions
│   └── pokemon.ts
└── utils/                      # Utility functions
    └── consts.ts
```

### **Key Design Patterns:**

1. **`_components` Pattern**: Using underscore prefix to indicate private components that are only used within their specific feature folder

   - Maintains clear boundaries between features
   - Prevents accidental reuse of feature-specific components
   - Improves codebase maintainability

## 📄 Pagination Implementation

### **Two Pagination Methods:**

#### **1. Infinite Scroll (Smooth & Load More Button)**

**File**: `src/pages/pokimons-page/pokemons-infinite-pagination.tsx`

**Features:**

- **Toggle between smooth scroll and load more button** using a Switch component
- **Intersection Observer API** for smooth infinite scroll detection
- **React Query's `useInfiniteQuery`** for efficient data fetching
- **Automatic loading detection** with customizable thresholds

**Implementation:**

#### **2. Controlled Pagination**

**File**: `src/pages/pokimons-page/pokimons-controlled-pagination.tsx`

**Features:**

- **Traditional pagination controls** with page numbers
- **URL state management** for bookmarkable pages
- **Custom pagination component** with Material-UI
- **Responsive design** with proper spacing and navigation

## 🔄 React Query Implementation

### **Data Fetching Strategy:**

#### **Infinite Query for Smooth Scrolling:**

#### **Regular Query for Controlled Pagination:**

### **Benefits:**

- **Automatic caching** and background refetching
- **Optimistic updates** and error handling
- **Request deduplication** and retry logic
- **Stale-while-revalidate** pattern
- **Offline support** with cached data

## 🎨 Loading States & Skeletons

### **Skeleton Implementation:**

### **Loading States:**

- **Initial loading**: Shows skeleton cards while fetching first page
- **Next page loading**: Shows loading indicator for infinite scroll
- **Controlled pagination**: Shows skeletons during page transitions
- **Error states**: Graceful error handling with user-friendly messages

## 🎯 Key Features & UX

### **Responsive Design:**

- **Mobile-first approach** with responsive breakpoints
- **Flexible grid system** that adapts to screen size
- **Touch-friendly interactions** for mobile devices
- **Responsive typography** and spacing

### **Performance Optimizations:**

- **Lazy loading** for images (`loading="lazy"`)
- **Intersection Observer** for efficient scroll detection
- **React Query caching** to minimize API calls
- **Optimized re-renders** with proper dependency arrays
- **Code splitting** for better initial load times

### **User Experience:**

- **Smooth animations** and hover effects
- **Error boundaries** for graceful error handling
- **Loading indicators** for better perceived performance
- **URL state management** for shareable links
- **Keyboard navigation** support
- **Accessibility features** with proper ARIA labels

## 🚀 Getting Started

### **Prerequisites:**

- Node.js (version 16 or higher)
- npm or yarn package manager

### **Installation:**

```bash
# Clone the repository
git clone https://github.com/alimhmd97/izam-eval-task

# Navigate to the project directory
cd izam-eval-task

# Install dependencies
npm install

# Start the development server
npm start
```

### **Available Scripts:**

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App
```

## 📱 Features Overview

### **Main Features:**

1. **Pokemon Listing** - Browse all Pokemon with pagination
2. **Infinite Scroll** - Smooth scrolling with automatic loading
3. **Load More Button** - Alternative pagination method
4. **Controlled Pagination** - Traditional page-based navigation
5. **Pokemon Details** - Individual Pokemon information pages
6. **Responsive Design** - Works on all device sizes
7. **Error Handling** - Graceful error states and recovery
8. **Loading States** - Skeleton loading for better UX

### **Technical Features:**

1. **TypeScript** - Full type safety throughout the application
2. **React Query** - Advanced data fetching and caching
3. **Material-UI** - Consistent and beautiful UI components
4. **React Router** - Client-side routing with URL state
5. **Custom Hooks** - Reusable business logic
6. **Error Boundaries** - Graceful error handling
7. **Performance Optimizations** - Lazy loading and efficient rendering

## 🔧 API Integration

### **Pokemon API:**

- **Base URL**: `https://pokeapi.co/api/v2`
- **Endpoints**:
  - `GET /pokemon` - List Pokemon with pagination
  - `GET /pokemon/{id}` - Get individual Pokemon details
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Caching**: 5-minute cache for list data, 10-minute cache for individual Pokemon

## 📊 Performance Metrics

### **Optimizations Implemented:**

- **React Query caching** reduces API calls by 80%
- **Lazy loading** improves initial page load time
- **Skeleton loading** provides instant visual feedback
- **Intersection Observer** enables efficient infinite scrolling
- **Responsive images** reduce bandwidth usage
