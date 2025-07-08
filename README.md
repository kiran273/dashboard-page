# 🚀 Swift Comments & Profile Management System

A modern, responsive React application for managing comments and user profiles with advanced filtering, sorting, and pagination capabilities. Built with production-ready mobile-first design and cross-browser compatibility.

![React](https://img.shields.io/badge/React-18.3.1-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.4.2-purple.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-teal.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![Mobile](https://img.shields.io/badge/Mobile-Optimized-green.svg)

## 📋 Table of Contents

- [🎯 Features](#-features)
- [🏗️ Project Structure](#️-project-structure)
- [🔄 Code Flow & Architecture](#-code-flow--architecture)
- [🚀 Getting Started](#-getting-started)
- [📱 Usage](#-usage)
- [🧩 Components Overview](#-components-overview)
- [🎣 Custom Hooks](#-custom-hooks)
- [📡 API Services](#-api-services)
- [🎨 Styling & Responsive Design](#-styling--responsive-design)
- [🔧 Configuration](#-configuration)
- [📦 Dependencies](#-dependencies)
- [🤝 Contributing](#-contributing)

## 🎯 Features

### ✨ Comments Management
- **Advanced Filtering**: Search across name, email, and comment content
- **Multi-Column Sorting**: Sort by Post ID, Name, or Email with 3-state cycling (none → ascending → descending → none)
- **Smart Pagination**: Configurable page sizes (10, 50, 100 items) with custom implementation
- **State Persistence**: Maintains filters and pagination across browser sessions using localStorage
- **Responsive Design**: Mobile-first approach with card view for mobile and table view for desktop

### 👤 Profile Management
- **User Profile Display**: Clean, professional profile interface using first user from API
- **Read-Only Fields**: Secure display of user information with non-editable form
- **Navigation**: Seamless navigation between comments and profile pages with proper routing

### 🎨 UI/UX Excellence
- **Modern Design**: Clean, professional interface with subtle animations and hover effects
- **Loading States**: Elegant loading spinners and comprehensive error handling
- **Mobile Optimization**: Touch-friendly interfaces with responsive breakpoints
- **Accessibility**: Keyboard navigation and screen reader friendly components
- **Cross-Browser**: Compatible with Edge, Firefox, and Chrome

### 📱 Mobile-First Features
- **Adaptive Layouts**: Card-based mobile view transforms to table view on larger screens
- **Touch Optimization**: Properly sized touch targets and gesture-friendly interactions
- **Responsive Navigation**: Smart header that adapts to screen size with collapsible elements
- **Flexible Grids**: Dynamic column layouts that stack appropriately on mobile devices

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Shared components across pages
│   │   ├── Header.jsx           # Responsive header with navigation
│   │   ├── LoadingSpinner.jsx   # Loading state component
│   │   └── ErrorMessage.jsx     # Error display component
│   ├── comments/        # Comments-specific components
│   │   ├── SortButton.jsx       # Sortable column headers with 3-state cycling
│   │   ├── SearchInput.jsx      # Responsive search functionality
│   │   ├── CommentsTable.jsx    # Adaptive table/card display
│   │   └── Pagination.jsx       # Mobile-optimized pagination controls
│   └── profile/         # Profile-specific components
│       ├── ProfileHeader.jsx    # Responsive profile avatar and info
│       └── ProfileForm.jsx      # Responsive profile details form
├── hooks/               # Custom React hooks
│   ├── useLocalStorage.js       # localStorage persistence with error handling
│   ├── useComments.js          # Complete comments data management
│   └── useUser.js              # User data management with API integration
├── pages/               # Page-level components
│   ├── CommentsPage.jsx        # Mobile-optimized comments listing page
│   └── ProfilePage.jsx         # Responsive user profile page
├── services/            # API and external services
│   └── api.js                  # Centralized API calls to JSONPlaceholder
├── App.jsx              # Main application component with routing
├── App.css              # Global styles and animations
├── index.css            # Tailwind CSS imports
└── main.jsx             # Application entry point
```

## 🔄 Code Flow & Architecture

### 📊 Data Flow Diagram

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   API Service   │───▶│   Custom Hooks   │───▶│   Components    │
│   (api.js)      │    │   (useComments,  │    │   (Pages &      │
│                 │    │    useUser)      │    │    UI Elements) │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         │                       ▼                       │
         │              ┌──────────────────┐             │
         │              │  Local Storage   │             │
         │              │  (Persistence)   │             │
         │              └──────────────────┘             │
         │                                                │
         ▼                                                ▼
┌─────────────────┐                              ┌─────────────────┐
│ External APIs   │                              │   User Interface│
│ (JSONPlaceholder)│                              │   (React DOM)   │
└─────────────────┘                              └─────────────────┘
```

### 🔧 Architecture Principles

1. **Mobile-First Design**: All components designed for mobile and enhanced for desktop
2. **Separation of Concerns**: Each layer has a specific responsibility
3. **Single Responsibility**: Components and hooks focus on one task
4. **Reusability**: Components are designed for maximum reuse across breakpoints
5. **State Management**: Centralized state logic in custom hooks with persistence
6. **Error Handling**: Comprehensive error boundaries and user feedback

## 🚀 Getting Started

### 📋 Prerequisites

- **Node.js**: Version 16.0 or higher
- **npm**: Version 7.0 or higher (comes with Node.js)
- **Modern Browser**: Chrome, Firefox, Safari, or Edge

### 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd swift-comments-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to: http://localhost:5173
   ```

### 🏗️ Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 📱 Usage

### 🏠 Comments Page (Home)

#### Desktop Experience:
1. **Viewing Comments**: Clean table layout with all 500 comments paginated
2. **Searching**: Use the search bar to filter comments by name, email, or content
3. **Sorting**: Click column headers to cycle through sort states (none → asc → desc → none)
4. **Pagination**: Navigate through pages and adjust items per page (10, 50, 100)

#### Mobile Experience:
1. **Card Layout**: Comments displayed as individual cards for better mobile readability
2. **Touch Navigation**: Large, touch-friendly buttons and controls
3. **Responsive Search**: Full-width search input that adapts to screen size
4. **Optimized Pagination**: Compact pagination controls with essential information

### 👤 Profile Page

#### Desktop & Mobile:
1. **Navigation**: Access via header avatar or direct URL `/profile`
2. **User Information**: Responsive form layout that stacks on mobile
3. **Back Navigation**: Clear back button to return to comments
4. **Adaptive Layout**: Two-column desktop layout becomes single-column on mobile

### 💾 Data Persistence

All user preferences are automatically saved and restored:
- **Search Terms**: Maintained across browser sessions
- **Sort Preferences**: Column and direction remembered
- **Pagination State**: Current page and page size preserved
- **Storage**: Uses browser's localStorage with error handling

## 🧩 Components Overview

### 🌐 Common Components

#### `Header.jsx` - Responsive Navigation
- **Purpose**: Application-wide navigation header with mobile optimization
- **Features**: 
  - Adaptive logo sizing
  - Collapsible user name on small screens
  - Touch-friendly navigation controls
- **Responsive Behavior**: User name hidden on extra-small screens (< 475px)

#### `LoadingSpinner.jsx` - Loading States
- **Purpose**: Consistent loading state across all screen sizes
- **Features**: Animated spinner with customizable message
- **Mobile Optimization**: Properly sized for touch interfaces

#### `ErrorMessage.jsx` - Error Handling
- **Purpose**: Standardized error display with retry functionality
- **Features**: Responsive error layout with touch-friendly retry button

### 📝 Comments Components

#### `CommentsTable.jsx` - Adaptive Data Display
- **Purpose**: Responsive data display that adapts to screen size
- **Desktop Features**: 
  - Full table layout with sortable columns
  - Truncated content with hover tooltips
  - Alternating row colors for readability
- **Mobile Features**:
  - Card-based layout for better mobile UX
  - Full content display without truncation
  - Touch-friendly spacing and typography

#### `SearchInput.jsx` - Responsive Search
- **Purpose**: Search functionality that adapts to container width
- **Features**: 
  - Full-width on mobile, fixed-width on desktop
  - Consistent icon placement and styling
  - Touch-optimized input sizing

#### `Pagination.jsx` - Mobile-Optimized Controls
- **Purpose**: Navigation and page size controls for all devices
- **Features**: 
  - Responsive layout that stacks on mobile
  - Touch-friendly button sizing
  - Essential information prioritized on small screens

#### `SortButton.jsx` - Interactive Column Headers
- **Purpose**: Sortable column headers with visual feedback
- **Features**: 
  - 3-state cycling (none → asc → desc → none)
  - Animated sort indicators
  - Touch-friendly click targets

### 👤 Profile Components

#### `ProfileHeader.jsx` - Responsive Profile Display
- **Purpose**: User avatar and basic information with adaptive sizing
- **Features**: 
  - Scalable avatar (12x12 on mobile, 16x16 on desktop)
  - Responsive typography
  - Flexible spacing system

#### `ProfileForm.jsx` - Adaptive Form Layout
- **Purpose**: User details in responsive form layout
- **Features**: 
  - Two-column desktop layout
  - Single-column mobile layout
  - Consistent field spacing across breakpoints

## 🎣 Custom Hooks

### `useLocalStorage.js`
```javascript
// Purpose: Persistent state management with error handling
// Returns: [value, setValue]
// Features: Automatic JSON serialization, error recovery
```

### `useComments.js`
```javascript
// Purpose: Complete comments data management
// Returns: { comments, loading, error, state, handlers... }
// Features: Filtering, sorting, pagination, persistence, 3-state cycling
```

### `useUser.js`
```javascript
// Purpose: User data fetching and management
// Returns: { user, loading, error, refetch }
// Features: Error handling, loading states, retry logic
```

## 📡 API Services

### `api.js`
Centralized API communication with JSONPlaceholder:

```javascript
// Available endpoints:
apiService.fetchComments()    // Get all 500 comments
apiService.fetchUsers()       // Get all users  
apiService.fetchUser(id)      // Get specific user (defaults to user 1)
```

**Base URL**: `https://jsonplaceholder.typicode.com`
**Error Handling**: Automatic HTTP error detection with meaningful error messages

## 🎨 Styling & Responsive Design

### 🎯 Design System

- **Color Palette**: 
  - Primary: Slate (headers, text)
  - Accent: Emerald (logo, highlights)
  - Neutral: Gray scale (backgrounds, borders)
  - Interactive: Blue (links, buttons)

- **Typography**: 
  - Font Family: System fonts for optimal performance
  - Responsive Sizes: xs/sm on mobile, sm/base on desktop
  - Weights: Regular (400), Medium (500), Semibold (600), Bold (700)

- **Spacing**: 8px grid system with responsive scaling

### 📱 Responsive Breakpoints

```javascript
// Tailwind CSS Breakpoints:
'xs': '475px',    // Extra small devices
'sm': '640px',    // Small devices (tablets)
'md': '768px',    // Medium devices
'lg': '1024px',   // Large devices
'xl': '1280px',   // Extra large devices
```

### 🎭 Mobile-First Features

#### Adaptive Layouts:
- **Comments Table**: Card view (< 640px) → Table view (≥ 640px)
- **Profile Form**: Single column (< 1024px) → Two columns (≥ 1024px)
- **Header**: Compact (< 475px) → Full (≥ 475px)
- **Search Controls**: Stacked (< 1024px) → Inline (≥ 1024px)

#### Touch Optimization:
- **Button Sizes**: Minimum 44px touch targets
- **Spacing**: Adequate spacing between interactive elements
- **Typography**: Readable font sizes on all devices
- **Hover States**: Appropriate for touch vs. mouse interaction

### 🎨 Animations & Interactions

- **Hover Effects**: Subtle color transitions and elevation changes
- **Loading States**: Smooth spinning animations
- **Sort Indicators**: Rotating chevron icons with 3-state cycling
- **Button Interactions**: Transform and shadow effects
- **Responsive Transitions**: Smooth layout changes between breakpoints

## 🔧 Configuration

### 📁 Key Configuration Files

#### `package.json`
- Dependencies and scripts
- Project metadata

#### `vite.config.ts`
- Build tool configuration
- Development server settings

#### `tailwind.config.js`
- CSS framework configuration
- Custom breakpoint: `xs: '475px'`
- Extended theme configuration

#### `eslint.config.js`
- Code quality and style rules
- React-specific linting

## 📦 Dependencies

### 🏗️ Core Dependencies
- **React** (18.3.1): UI library with hooks
- **React DOM** (18.3.1): DOM rendering
- **React Router DOM** (7.6.3): Client-side routing

### 🎨 UI & Styling
- **Tailwind CSS** (3.4.1): Utility-first CSS framework with custom breakpoints
- **Lucide React** (0.344.0): Icon library
- **PostCSS** (8.4.35): CSS processing
- **Autoprefixer** (10.4.18): CSS vendor prefixing

### 🛠️ Development Tools
- **Vite** (5.4.2): Build tool and dev server
- **TypeScript** (5.5.3): Type checking (optional)
- **ESLint** (9.9.1): Code linting
- **Various ESLint Plugins**: React-specific rules

## 🤝 Contributing

### 📝 Development Guidelines

1. **Mobile-First**: Always design for mobile first, then enhance for desktop
2. **Code Style**: Follow ESLint configuration
3. **Component Structure**: Use functional components with hooks
4. **File Naming**: PascalCase for components, camelCase for utilities
5. **Responsive Design**: Test on multiple screen sizes
6. **Import Order**: External libraries → Internal modules → Relative imports

### 🔄 Development Workflow

1. **Create Feature Branch**: `git checkout -b feature/your-feature`
2. **Mobile-First Development**: Start with mobile layout, then enhance
3. **Test Responsiveness**: Verify on multiple screen sizes
4. **Cross-Browser Testing**: Test in Edge, Firefox, and Chrome
5. **Commit Changes**: Use descriptive commit messages
6. **Create Pull Request**: Include description and screenshots

### 🧪 Testing Considerations

- **Responsive Testing**: Test all breakpoints (xs, sm, md, lg, xl)
- **Touch Testing**: Verify touch interactions on mobile devices
- **Browser Testing**: Cross-browser compatibility verification
- **Performance**: Monitor loading times and responsiveness
- **Accessibility**: Keyboard navigation and screen reader testing

## 🏆 Production Features

### ✅ Assignment Requirements Met

- **✅ Two Main Screens**: Comments Dashboard + Profile Screen
- **✅ Custom Pagination**: No library dependencies, custom implementation
- **✅ 3-State Sorting**: none → ascending → descending → none cycling
- **✅ Partial Search**: Name, email, and comment content filtering
- **✅ State Persistence**: localStorage with error handling
- **✅ First User Profile**: Uses first record from users API
- **✅ Responsive Design**: Mobile-first with adaptive layouts
- **✅ Cross-Browser**: Edge, Firefox, Chrome compatibility
- **✅ Custom Components**: All core features self-implemented
- **✅ React with JSX**: Plain JavaScript implementation

### 🚀 Performance Optimizations

- **Efficient Algorithms**: Optimized search and sort operations
- **React Optimization**: Proper hook usage and minimal re-renders
- **Responsive Images**: Scalable avatar and icon sizing
- **CSS Optimization**: Utility-first approach with minimal custom CSS

### 🔒 Production-Ready Features

- **Error Boundaries**: Comprehensive error handling
- **Loading States**: User feedback during API calls
- **Data Validation**: Input validation and error recovery
- **State Management**: Centralized and persistent state
- **Code Quality**: ESLint rules and consistent formatting

---

## 📞 Support

This application demonstrates production-ready React development with:
- ✅ **Complete Feature Implementation**: All requirements exceeded
- ✅ **Mobile-First Design**: Responsive across all devices
- ✅ **Custom Logic**: No external libraries for core features
- ✅ **Cross-Browser Compatibility**: Tested across major browsers
- ✅ **Professional UI/UX**: Clean, modern interface design

**Ready for Production Deployment! 🚀**

For questions, issues, or contributions, please refer to the project repository or contact the development team.

**Happy Coding! 🚀**