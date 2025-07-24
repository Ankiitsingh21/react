# React Learning Projects Collection

This repository contains multiple React projects demonstrating various concepts and patterns in React development. Each project focuses on specific React features and best practices.

## 📁 Project Structure

```
├── RoutingInReact/          # React Router implementation
├── practice/                # Basic React concepts and components
├── propsdrilling/          # Context API and state management
└── README.md               # This file
```

---

## 🚀 Project 1: RoutingInReact

### Overview
A React application demonstrating client-side routing using React Router DOM. Features navigation between different pages with lazy loading for performance optimization.

### 🔧 Technologies Used
- **React 19.1.0** - Latest React version
- **React Router DOM 7.7.0** - For client-side routing
- **Vite 7.0.4** - Fast build tool and dev server
- **ESLint** - Code linting and formatting

### 📋 Features
- **Client-side Routing** - Navigate between pages without page refresh
- **Lazy Loading** - Components are loaded on-demand for better performance
- **Navigation Bar** - Persistent navigation across all pages
- **Two Main Routes**:
  - `/` - Landing Page
  - `/Dashboard` - Dashboard Page

### 🏗️ Project Structure
```
RoutingInReact/
├── src/
│   ├── components/
│   │   ├── dashboard.jsx    # Dashboard component
│   │   └── landing.jsx      # Landing page component
│   ├── App.jsx              # Main app with routing setup
│   ├── App.css              # Styles (currently empty)
│   └── main.jsx            # Entry point
├── public/
├── package.json
└── vite.config.js
```

### 💡 Key Concepts Demonstrated
- **React.lazy()** - Dynamic imports for code splitting
- **BrowserRouter** - HTML5 history API routing
- **Routes & Route** - Declarative route configuration
- **useNavigate Hook** - Programmatic navigation
- **Component Composition** - AppBar component pattern

### 🚦 Getting Started
```bash
cd RoutingInReact/RoutingInReact
npm install
npm run dev
```

### 🔍 Code Highlights
```jsx
// Lazy loading components
const Dashboard = React.lazy(() => import('./components/dashboard'));
const Landing = React.lazy(() => import('./components/landing'));

// Navigation with useNavigate hook
function AppBar(){
  const navigate = useNavigate();
  return <div>
    <button onClick={()=> navigate("/Dashboard")}>Dashboard</button>
    <button onClick={()=> navigate("/")}>Landing Page</button>
  </div>
}
```

---

## 🚀 Project 2: Frontend Practice

### Overview
A React application showcasing fundamental React concepts including component composition, props, state management, and modern React patterns.

### 🔧 Technologies Used
- **React 19.1.0** - Latest React version
- **Vite 7.0.4** - Build tool
- **ESLint** - Code quality

### 📋 Features
- **Component Composition** - Wrapper components with children
- **Props Handling** - Passing data between components
- **State Management** - Using useState hook
- **React.memo** - Performance optimization (commented examples)
- **Modern Styling** - Inline styles with modern design patterns

### 🏗️ Current Implementation
The project demonstrates a **CardWrapper** pattern:
- **CardWrapper Component** - Reusable container with modern styling
- **TextComponent** - Simple content component
- **Modern Design** - Clean borders, shadows, and typography

### 💡 Key Concepts Demonstrated
- **Higher-Order Components** - CardWrapper accepting children
- **Component Composition** - Building UIs with reusable pieces
- **Modern CSS-in-JS** - Inline styling with design system
- **React.memo** - Memoization for performance (in comments)

### 🎨 Design Features
- Modern gray borders (`#2D3748`)
- Subtle shadows for depth
- Rounded corners (10px)
- Spacious padding (20px)
- Professional typography (Segoe UI)

### 🚦 Getting Started
```bash
cd practice/Practice/frontend-practice
npm install
npm run dev
```

### 🔍 Code Highlights
```jsx
// Component composition pattern
function CardWrapper({innerComponent}){
  return <div style={{
    border: "1.5px solid #2D3748",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    padding: "20px",
    backgroundColor: "#fafbfc",
    // ... more modern styling
  }}>
    {innerComponent}
  </div>
}

// Usage
<CardWrapper innerComponent={TextComponent}/>
```

---

## 🚀 Project 3: Hooks Practice

### Overview
An advanced React application demonstrating various React Hooks including useState, useEffect, and practical examples with API integration and real-time calculations.

### 🔧 Technologies Used
- **React 19.1.0** - Latest React version
- **Axios 1.10.0** - HTTP client for API calls
- **Vite 7.0.4** - Build tool
- **ESLint** - Code quality

### 📋 Features
- **API Integration** - Fetching data from external APIs
- **Real-time Calculations** - Dynamic sum calculation
- **Multiple Hook Examples** - useState, useEffect demonstrations
- **Controlled Inputs** - Form handling with React patterns

### 🏗️ Current Implementation
**Sum Calculator** - Real-time calculation of sum from 0 to entered number:
- Input field for number entry
- Real-time calculation display
- useEffect for side effects
- Controlled component pattern

### 💡 Key Concepts Demonstrated
- **useState Hook** - Managing component state
- **useEffect Hook** - Side effects and lifecycle
- **Controlled Components** - Form input handling
- **API Calls** - Using Axios with useEffect
- **Dynamic Calculations** - Real-time computation
- **Event Handling** - onChange and onClick events

### 🔍 Code Examples Included (Commented)
1. **Todo Fetcher** - API integration example
2. **Dynamic Todo Display** - ID-based component rendering
3. **Sum Calculator** - Mathematical operations

### 🚦 Getting Started
```bash
cd practice/hooksPractice
npm install
npm run dev
```

### 🔍 Code Highlights
```jsx
// Real-time sum calculation
function App(){
  const [number, setNumber] = useState(0);
  const [inputValue, setValue] = useState('');
  const num = parseInt(inputValue);

  // Calculate sum from 0 to num
  let total = 0;
  for(let i = 0; i <= num; i++){
    total += i;
  }
  setNumber(total);

  return (
    <div>
      <input 
        type="text" 
        placeholder='Enter the number' 
        value={inputValue} 
        onChange={(e) => setValue(e.target.value)}
      />
      <h1>sum is {number}</h1>
    </div>
  )
}
```

---

## 🚀 Project 4: Props Drilling & Context API

### Overview
A comprehensive React application demonstrating the evolution from props drilling to Context API for state management. Shows both the problem and solution for passing data through multiple component layers.

### 🔧 Technologies Used
- **React 19.1.0** - Latest React version
- **React Context API** - Built-in state management
- **Vite 7.0.4** - Build tool
- **ESLint** - Code quality

### 📋 Features
- **Counter Application** - Increment, decrement, and reset functionality
- **Context Implementation** - Avoiding props drilling
- **Multiple Components** - Hierarchical component structure
- **State Management** - Global state with Context API

### 🏗️ Component Architecture
```
App (Provider with {count, setCount})
└── Count
    ├── CountRenderer (Consumes {count})
    └── Button (Consumes {count, setCount})
```

**Key Improvement**: The updated implementation passes both `count` and `setCount` through context as an object, eliminating ALL props drilling. No props are passed between components anymore!

### 💡 Key Concepts Demonstrated
- **Context Creation with Defaults** - `createContext()` with default object structure
- **Object Context Values** - Passing both state and setter in context
- **Context Provider** - Wrapping components with state object
- **useContext Hook** - Consuming context with destructuring
- **Destructuring Assignment** - Clean extraction of values from context
- **Eliminating Props Drilling** - No props needed between components
- **State Management** - Global state without external libraries

### 🎯 Functionality
- **Increment Counter** - Increase count by 1
- **Decrement Counter** - Decrease count by 1
- **Reset Counter** - Set count back to 0
- **Real-time Updates** - All components update simultaneously

### 🚦 Getting Started
```bash
cd propsdrilling
npm install
npm run dev
```

### 🔍 Code Highlights
```jsx
// Context creation with default values
export const counterContext = createContext({
  count: 0,
  setCount: () => {},
});

// Provider setup with object value
function App() {
  const [count, setCount] = useState(0);
  return (
    <counterContext.Provider value={{count, setCount}}>
      <Count/>
    </counterContext.Provider>
  )
}

// Context consumption with destructuring
function CountRenderer(){
  const {count} = useContext(counterContext);
  return <div>{count}</div>
}

// Button with context - no props needed
function Button(){
  const {count, setCount} = useContext(counterContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increase the count
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrease the count
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  )
}
```

---

## 📚 Learning Outcomes

### 🎯 React Fundamentals
- **Components** - Functional components and composition
- **Props** - Data passing between components
- **State** - Managing component state with useState
- **Effects** - Side effects with useEffect
- **Event Handling** - User interactions

### 🔀 Advanced Patterns
- **Context API** - Global state management
- **Lazy Loading** - Performance optimization
- **Higher-Order Components** - Component composition
- **Controlled Components** - Form handling
- **React.memo** - Performance optimization

### 🚀 Modern Development
- **Vite** - Fast build tool and development server
- **ESLint** - Code quality and consistency
- **Modern React** - Latest React 19 features
- **Hooks** - Modern React patterns

### 🛠️ Development Tools
- **Package Management** - npm and dependencies
- **Build Tools** - Vite configuration
- **Development Server** - Hot module replacement
- **Linting** - ESLint configuration

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation & Running
```bash
# Clone the repository
git clone [repository-url]

# Navigate to any project
cd [project-name]

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 🔧 Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the excellent build tool
- Open source community for inspiration and resources

---

*Happy Learning! 🚀*