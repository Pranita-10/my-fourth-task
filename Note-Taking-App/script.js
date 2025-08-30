document.addEventListener('DOMContentLoaded', () => {
    const noteText = document.getElementById('note-text');
    const addNoteBtn = document.getElementById('add-note-btn');
    const notesList = document.getElementById('notes-list');

    // Load notes when the page loads
    loadNotes();

    // Event listener for adding a new note
    addNoteBtn.addEventListener('click', saveNote);

    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notesList.innerHTML = '';
        const maxChars = 100; // Set the character limit for truncation

        notes.forEach((note, index) => {
            const noteElement = document.createElement('div');
            noteElement.className = 'note';

            const noteContent = document.createElement('p');
            noteContent.className = 'note-content';
            const noteActions = document.createElement('div');
            noteActions.className = 'note-actions';

            // Check if the note is long and needs truncation
            const isLongNote = note.content.length > maxChars;
            const displayContent = isLongNote 
                ? note.content.substring(0, maxChars) + '...'
                : note.content;

            noteContent.textContent = displayContent;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Delete Note';
            deleteBtn.addEventListener('click', () => deleteNote(index));
            noteActions.appendChild(deleteBtn);

            if (isLongNote) {
                const readMoreBtn = document.createElement('button');
                readMoreBtn.className = 'read-more-btn';
                readMoreBtn.textContent = 'Read more';

                readMoreBtn.addEventListener('click', () => {
                    if (readMoreBtn.textContent === 'Read more') {
                        noteContent.textContent = note.content;
                        readMoreBtn.textContent = 'Read less';
                    } else {
                        noteContent.textContent = displayContent;
                        readMoreBtn.textContent = 'Read more';
                    }
                });
                noteActions.appendChild(readMoreBtn);
            }

            noteElement.innerHTML = `<h3>Note ${index + 1}</h3>`;
            noteElement.appendChild(noteContent);
            noteElement.appendChild(noteActions);
            notesList.appendChild(noteElement);
        });
    }

    function saveNote() {
        const newNoteContent = noteText.value.trim();
        if (newNoteContent) {
            const now = new Date();
            const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
            const newNote = { content: newNoteContent, timestamp: formattedDate };

            const notes = JSON.parse(localStorage.getItem('notes')) || [];
            notes.push(newNote);
            localStorage.setItem('notes', JSON.stringify(notes));

            noteText.value = '';
            loadNotes();
        }
    }

    function deleteNote(index) {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        loadNotes();
    }
});