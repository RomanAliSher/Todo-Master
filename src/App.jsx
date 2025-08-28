import { useState } from 'react'
import Forms from './components/Forms'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 pt-8 pb-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            ✅ Todo Master
          </h1>
          <p className="text-xl text-white/80 font-light mb-2">
            Manage your tasks with Redux Toolkit
          </p>
          <div className="flex justify-center items-center space-x-4 text-white/60">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Redux Toolkit
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              React 19
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Add Todo Form */}
          <div className="mb-8">
            <Forms />
          </div>
          
          {/* Todo List */}
          <div>
            <Todos />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="relative z-10 text-center pb-8">
        <p className="text-white/60 text-sm">
          Built with ❤️ using{' '}
          <a 
            href="https://redux-toolkit.js.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-200 transition-colors duration-200"
          >
            Redux Toolkit
          </a>
          {' & '}
          <a 
            href="https://react.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
          >
            React
          </a>
        </p>
      </div>
    </div>
  )
}

export default App
