# 🚀 Swift Comments & Profile Management System

Link1: https://dashboard-page-nu.vercel.app/
Link2: https://dashboard-page-kiran273s-projects.vercel.app/

A modern, responsive React application for managing comments and user profiles with advanced filtering, sorting, and pagination capabilities.


## 📋 Table of Contents

- [🎯 Features](#-features)
- [🏗️ Project Structure](#️-project-structure)
- [🔄 Code Flow & Architecture](#-code-flow--architecture)
- [🚀 Getting Started](#-getting-started)
- [📱 Usage](#-usage)
- [🧩 Components Overview](#-components-overview)
- [🎣 Custom Hooks](#-custom-hooks)
- [📡 API Services](#-api-services)
- [🎨 Styling](#-styling)
- [🔧 Configuration](#-configuration)
- [📦 Dependencies](#-dependencies)
- [🤝 Contributing](#-contributing)

## 🎯 Features

### ✨ Comments Management
- **Advanced Filtering**: Search across name, email, and comment content
- **Multi-Column Sorting**: Sort by Post ID, Name, or Email (ascending/descending)
- **Smart Pagination**: Configurable page sizes (10, 50, 100 items)
- **State Persistence**: Maintains filters and pagination across browser sessions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 👤 Profile Management
- **User Profile Display**: Clean, professional profile interface
- **Read-Only Fields**: Secure display of user information
- **Navigation**: Seamless navigation between comments and profile pages

### 🎨 UI/UX Excellence
- **Modern Design**: Clean, professional interface with subtle animations
- **Loading States**: Elegant loading spinners and error handling
- **Hover Effects**: Interactive elements with smooth transitions
- **Accessibility**: Keyboard navigation and screen reader friendly

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Shared components across pages
│   │   ├── Header.jsx           # Application header with navigation
│   │   ├── LoadingSpinner.jsx   # Loading state component
│   │   └── ErrorMessage.jsx     # Error display component
│   ├── comments/        # Comments-specific components
│   │   ├── SortButton.jsx       # Sortable column headers
│   │   ├── SearchInput.jsx      # Search functionality
│   │   ├── CommentsTable.jsx    # Data table display
│   │   └── Pagination.jsx       # Pagination controls
│   └── profile/         # Profile-specific components
│       ├── ProfileHeader.jsx    # Profile avatar and basic info
│       └── ProfileForm.jsx      # Profile details form
├── hooks/               # Custom React hooks
│   ├── useLocalStorage.js       # localStorage persistence
│   ├── useComments.js          # Comments data management
│   └── useUser.js              # User data management
├── pages/               # Page-level components
│   ├── CommentsPage.jsx        # Comments listing page
│   └── ProfilePage.jsx         # User profile page
├── services/            # API and external services
│   └── api.js                  # Centralized API calls
├── App.jsx              # Main application component
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

1. **Separation of Concerns**: Each layer has a specific responsibility
2. **Single Responsibility**: Components and hooks focus on one task
3. **Reusability**: Components are designed for maximum reuse
4. **State Management**: Centralized state logic in custom hooks
5. **Error Handling**: Comprehensive error boundaries and user feedback

### 📈 Component Hierarchy

```
App
├── Router
    ├── CommentsPage
    │   ├── Header
    │   ├── SortButton (×3)
    │   ├── SearchInput
    │   ├── CommentsTable
    │   └── Pagination
    └── ProfilePage
        ├── Header
        ├── ProfileHeader
        └── ProfileForm
```

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

1. **Viewing Comments**: The main page displays a paginated table of comments
2. **Searching**: Use the search bar to filter comments by name, email, or content
3. **Sorting**: Click column headers to sort data (cycles: ascending → descending → none)
4. **Pagination**: Navigate through pages and adjust items per page
5. **Profile Access**: Click the user avatar in the header to view profile

### 👤 Profile Page

1. **Navigation**: Access via header avatar or direct URL `/profile`
2. **User Information**: View read-only user details in a clean form layout
3. **Return**: Use the back button to return to comments

### 💾 Data Persistence

- **Search Terms**: Automatically saved and restored
- **Sort Preferences**: Maintained across browser sessions
- **Pagination State**: Current page and page size remembered
- **Storage**: Uses browser's localStorage for persistence

## 🧩 Components Overview

### 🌐 Common Components

#### `Header.jsx`
- **Purpose**: Application-wide navigation header
- **Features**: Logo, user avatar, navigation controls
- **Props**: `showProfile` (boolean) - controls profile link visibility

#### `LoadingSpinner.jsx`
- **Purpose**: Consistent loading state across the app
- **Features**: Animated spinner with customizable message
- **Props**: `message` (string) - loading text to display

#### `ErrorMessage.jsx`
- **Purpose**: Standardized error display and retry functionality
- **Features**: Error text, retry button, customizable title
- **Props**: `error`, `onRetry`, `title`

### 📝 Comments Components

#### `SortButton.jsx`
- **Purpose**: Interactive column headers with sort indicators
- **Features**: Visual sort direction, hover effects, click handling
- **Props**: `field`, `children`, `sortField`, `sortDirection`, `onSort`

#### `SearchInput.jsx`
- **Purpose**: Search functionality with icon and placeholder
- **Features**: Real-time search, clear visual feedback
- **Props**: `value`, `onChange`, `placeholder`

#### `CommentsTable.jsx`
- **Purpose**: Data table with alternating row colors
- **Features**: Responsive design, truncated content, empty state
- **Props**: `comments` (array)

#### `Pagination.jsx`
- **Purpose**: Navigation and page size controls
- **Features**: Page info, size selector, navigation buttons
- **Props**: `currentPage`, `totalPages`, `pageSize`, `totalItems`, `onPageChange`, `onPageSizeChange`

### 👤 Profile Components

#### `ProfileHeader.jsx`
- **Purpose**: User avatar and basic information display
- **Features**: Circular avatar with initials, name, email
- **Props**: None (uses static data)

#### `ProfileForm.jsx`
- **Purpose**: User details in form layout
- **Features**: Two-column responsive grid, read-only inputs
- **Props**: `user` (object)

## 🎣 Custom Hooks

### `useLocalStorage.js`
```javascript
// Purpose: Persistent state management
// Returns: [value, setValue]
// Features: Automatic JSON serialization, error handling
```

### `useComments.js`
```javascript
// Purpose: Complete comments data management
// Returns: { comments, loading, error, state, handlers... }
// Features: Filtering, sorting, pagination, persistence
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
apiService.fetchComments()    // Get all comments
apiService.fetchUsers()       // Get all users  
apiService.fetchUser(id)      // Get specific user
```

**Base URL**: `https://jsonplaceholder.typicode.com`

**Error Handling**: Automatic HTTP error detection and meaningful error messages

## 🎨 Styling

### 🎯 Design System

- **Color Palette**: 
  - Primary: Slate (headers, text)
  - Accent: Emerald (logo, highlights)
  - Neutral: Gray scale (backgrounds, borders)
  - Interactive: Blue (links, buttons)

- **Typography**: 
  - Font Family: System fonts (-apple-system, BlinkMacSystemFont, etc.)
  - Sizes: Responsive scale from text-xs to text-xl
  - Weights: Regular (400), Medium (500), Semibold (600), Bold (700)

- **Spacing**: 8px grid system (space-1 = 4px, space-2 = 8px, etc.)

### 🎭 Animations & Interactions

- **Hover Effects**: Subtle color transitions and elevation changes
- **Loading States**: Smooth spinning animations
- **Sort Indicators**: Rotating chevron icons
- **Button Interactions**: Transform and shadow effects

### 📱 Responsive Design

- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

- **Adaptive Layouts**: Grid systems adjust column counts
- **Touch-Friendly**: Adequate touch targets on mobile devices

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
- Custom theme extensions

#### `eslint.config.js`
- Code quality and style rules
- React-specific linting

## 📦 Dependencies

### 🏗️ Core Dependencies
- **React** (18.3.1): UI library
- **React DOM** (18.3.1): DOM rendering
- **React Router DOM** (7.6.3): Client-side routing

### 🎨 UI & Styling
- **Tailwind CSS** (4.1.11): Utility-first CSS framework
- **Lucide React** (0.525.0): Icon library


### 🛠️ Development Tools
- **Vite** (7.0.0): Build tool and dev server
- **ESLint** (9.29.0): Code linting
- **Various ESLint Plugins**: React-specific rules

## 🤝 Contributing

### 📝 Development Guidelines

1. **Code Style**: Follow ESLint configuration
2. **Component Structure**: Use functional components with hooks
3. **File Naming**: PascalCase for components, camelCase for utilities
4. **Import Order**: External libraries → Internal modules → Relative imports

### 🔄 Development Workflow

1. **Create Feature Branch**: `git checkout -b feature/your-feature`
2. **Make Changes**: Follow existing patterns and conventions
3. **Test Locally**: Ensure all functionality works
4. **Commit Changes**: Use descriptive commit messages
5. **Create Pull Request**: Include description of changes

### 🧪 Testing Considerations

- **Manual Testing**: Test all user interactions
- **Browser Testing**: Verify cross-browser compatibility
- **Responsive Testing**: Check mobile and tablet layouts
- **Performance**: Monitor loading times and responsiveness


**Happy Coding! 🚀**
