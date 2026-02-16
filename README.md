# HRNet – React Modernization Project

HRNet is an internal employee management application originally built using jQuery.
This project consists of a full migration to a modern React-based architecture using Vite.
The goal was to improve performance, maintainability, and scalability while removing legacy dependencies.

## 🎯 Objectives

- Replace legacy jQuery components
- Improve performance and Lighthouse scores
- Modernize the architecture using React
- Publish a reusable React modal component as an npm package
- Ensure maintainability and scalability

## 🛠️ Tech Stack

- React 18
- Vite
- Custom npm package: @geoffreybunel/react-hrnet-modal
- ESLint
- Lighthouse performance auditing

## 📦 Installation

```ini
git clone https://github.com/geoffreybunel/hrnet.git
cd hrnet
npm install
```

## 🚀 Running the project

```ini
npm run dev
```

## 🔁 Modal Modernizing

The legacy jQuery modal was replaced with a fully controlled React component.

The new modal:
- Is reusable
- Is accessible
- Supports keyboard interactions
- Is published as an npm package

Package :
```ini
@geoffreybunel/react-hrnet-modal
```

This ensures better maintainability and reusability across projects.

## 📊 Performance Improvements

- Removal of jQuery
- Optimized rendering using React
- Reduced bundle size
- Lighthouse performance improvements

## 👤 Author

Geoffrey Bunel