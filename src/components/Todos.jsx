import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removetodo, updatetodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const startEdit = (todo) => {
        setEditingId(todo.id);
        setEditText(todo.text);
    };

    const saveEdit = (id) => {
        if (editText.trim()) {
            dispatch(updatetodo({ id, text: editText.trim() }));
        }
        setEditingId(null);
        setEditText('');
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditText('');
    };

    if (todos.length === 0) {
        return (
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 shadow-2xl text-center">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-white mb-2">No Tasks Yet!</h3>
                <p className="text-white/70 text-lg">
                    Start by adding your first task above. You've got this! 💪
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">📋 Your Tasks</h2>
                    <p className="text-white/70">
                        {todos.length} task{todos.length !== 1 ? 's' : ''} total
                    </p>
                </div>
                <div className="text-3xl">
                    {todos.length === 1 ? '🎯' : todos.length < 5 ? '⚡' : '🔥'}
                </div>
            </div>

            <div className="space-y-3">
                {todos.map((todo, index) => (
                    <div
                        key={todo.id}
                        className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/15 transition-all duration-300 transform hover:scale-[1.02]"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center flex-1">
                                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold text-sm mr-4">
                                    {index + 1}
                                </div>
                                
                                {editingId === todo.id ? (
                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') saveEdit(todo.id);
                                            if (e.key === 'Escape') cancelEdit();
                                        }}
                                        className="flex-1 bg-white/20 border border-white/30 rounded-xl px-4 py-2 text-white placeholder-white/50 outline-none focus:bg-white/30 focus:border-white/50 transition-all duration-200"
                                        autoFocus
                                    />
                                ) : (
                                    <div 
                                        className="flex-1 text-white font-medium text-lg cursor-pointer"
                                        onClick={() => startEdit(todo)}
                                    >
                                        {todo.text}
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center space-x-2 ml-4">
                                {editingId === todo.id ? (
                                    <>
                                        <button
                                            onClick={() => saveEdit(todo.id)}
                                            className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all duration-200 transform hover:scale-110"
                                            title="Save changes"
                                        >
                                            ✅
                                        </button>
                                        <button
                                            onClick={cancelEdit}
                                            className="p-2 bg-gray-500 hover:bg-gray-600 text-white rounded-xl transition-all duration-200 transform hover:scale-110"
                                            title="Cancel editing"
                                        >
                                            ❌
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => startEdit(todo)}
                                            className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-200 transform hover:scale-110 opacity-0 group-hover:opacity-100"
                                            title="Edit task"
                                        >
                                            ✏️
                                        </button>
                                        <button
                                            onClick={() => dispatch(removetodo(todo.id))}
                                            className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-all duration-200 transform hover:scale-110"
                                            title="Delete task"
                                        >
                                            🗑️
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Stats */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div className="text-2xl font-bold text-green-400">{todos.length}</div>
                        <div className="text-white/60 text-sm">Total Tasks</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-blue-400">
                            {todos.filter(todo => todo.text.length > 20).length}
                        </div>
                        <div className="text-white/60 text-sm">Detailed</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-purple-400">
                            {Math.floor(Math.random() * 100)}%
                        </div>
                        <div className="text-white/60 text-sm">Productivity</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todos