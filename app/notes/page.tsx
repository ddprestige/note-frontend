'use client';
import { useEffect, useState } from 'react';

type Note = {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
};

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [newNote, setNewNote] = useState<Omit<Note, "_id" | "createdAt">>({
    title: '',
    content: '',
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/notes')
      .then((res) => res.json())
      .then((data: Note[]) => {
        setNotes(data);
        setLoading(false);
      });
  }, []);

  const handleCreate = async () => {
    if (!newNote.title) return;

    const res = await fetch('http://localhost:5000/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newNote),
    });

    const createdNote: Note = await res.json();
    setNotes([createdNote, ...notes]);
    setNewNote({ title: '', content: '' });
  };

  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:5000/api/notes/${id}`, {
      method: 'DELETE',
    });
    setNotes(notes.filter((note) => note._id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Your Notes</h1>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          className="border px-3 py-2 mr-2 rounded w-1/2"
        />
        <input
          type="text"
          placeholder="Content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
          className="border px-3 py-2 mr-2 rounded w-1/2"
        />
        <button
          onClick={handleCreate}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add Note
        </button>
      </div>

      {loading ? (
        <p>Loading notes...</p>
      ) : notes.length === 0 ? (
        <p>No notes yet. Create one!</p>
      ) : (
        <div className="grid gap-4">
          {notes.map((note) => (
            <div
              key={note._id}
              className="bg-white p-4 shadow rounded flex justify-between items-start"
            >
              <div>
                <h2 className="text-xl font-semibold">{note.title}</h2>
                <p className="text-gray-600">{note.content}</p>
              </div>
              <button
                onClick={() => handleDelete(note._id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
