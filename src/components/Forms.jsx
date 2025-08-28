import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function Forms() {
    const [input, setInput] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const dispatch = useDispatch();
    
    const addTodoHandler = async (e) => {
        e.preventDefault()
        if (!input.trim()) return;
        
        setIsLoading(true);
        
        // Add a small delay for better UX
        setTimeout(() => {
            dispatch(addTodo(input.trim()))
            setInput('')
            setIsLoading(false);
        }, 300);
    }
    
    return (
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">✨ Add New Task</h2>
                <p className="text-white/70">What would you like to accomplish today?</p>
            </div>
            
            <form onSubmit={addTodoHandler} className="space-y-4">
                <div className="relative">
                    <input
                        type="text"
                        className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-white/50 outline-none focus:bg-white/20 focus:border-white/50 transition-all duration-300 text-lg font-medium pr-16"
                        placeholder="Enter your task here..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        disabled={isLoading}
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40">
                        📝
                    </div>
                </div>
                
                <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Adding Task...
                        </div>
                    ) : (
                        <div className="flex items-center justify-center">
                            <span className="mr-2">➕</span>
                            Add Todo
                        </div>
                    )}
                </button>
            </form>
            
            {/* Quick Tips */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-white/60 text-sm text-center">
                    💡 <span className="font-medium">Pro tip:</span> Press Enter to quickly add tasks!
                </p>
            </div>
        </div>
    )
}

export default Forms