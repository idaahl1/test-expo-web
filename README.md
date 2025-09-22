# 🪲 TestExpo

A modern, responsive application built with React, TypeScript, and Vite.

## 🐛 Bugs

This section contains intentionally implemented bugs for testing and discovery purposes. Help us find them!

- **👤 User Information**: Email are marked as required field but does not stop user from submitting empty
- **👤 User Information**: Reset form does not reset all fields
- **👤 User Information**: Wrong place holder text in first text field
- **👤 User Information**: Info in url after submitting

- **📋 Task Management**: Mark All Done button not working as expected

- **📖 About Page**: Broken link in button

---
## ✨ Features

- **📋 Task Management**: Create, edit, toggle, and delete todos with ease
- **👤 User Information**: Collect and manage user profile data
- **📖 About Page**: Learn more about the application
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **🎨 Modern UI**: Clean interface with Sogeti's blue and red color scheme
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd test-expo-web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── TodoForm.tsx    # Todo input form
│   ├── TodoList.tsx    # Todo list container
│   ├── TodoItem.tsx    # Individual todo item
│   └── TodoActions.tsx # Bulk actions for todos
├── pages/              # Page-level components
│   ├── TasksPage.tsx   # Todo management page
│   ├── UserInfoPage.tsx # User information form
│   ├── AboutUsPage.tsx # About page
│   └── index.ts        # Page exports
├── hooks/              # Custom React hooks
│   ├── useNavigation.ts # Page navigation logic
│   └── useTodos.ts     # Todo management logic
├── types/              # TypeScript type definitions
│   └── Todo.ts         # Interface definitions
├── constants/          # App configuration
│   └── index.ts        # Colors, config, validation
└── App.tsx             # Main application component
```

## 🎨 Design System

- **Primary Blue**: `#0099cc` to `#006699` (gradients)
- **Accent Red**: `#e63946` to `#d62828` (call-to-action buttons)

## 🛠️ Built With

- **React 18** - UI library
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with gradients and animations
- **ESLint** - Code linting and formatting

## 📱 Pages

1. **User Info** (Default) - Collect user profile information
2. **Tasks** - Manage your todo list with full CRUD operations
3. **About Us** - Learn about the TaskManager application

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
