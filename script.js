// Slideshow
let slideIndex = 0;
let images = [ "img/foto5.jpg", "img/foto4.jpg", "img/foto2.jpg", "img/foto3.jpg","img/foto18.jpg","img/foto19.jpg" ];


function changeSlide(step) {
    slideIndex = (slideIndex + step + images.length) % images.length;
    document.getElementById("slideshow").src = images[slideIndex];
}

// Slideshow otomatis
setInterval(() => {
    changeSlide(1);
}, 3000); // Ganti gambar setiap 3 detik

// Modal Foto
function openModal(src) {
    document.getElementById("photoModal").style.display = "block";
    document.getElementById("modalImage").src = src;
}

function closeModal() {
    document.getElementById("photoModal").style.display = "none";
}
const noteInput = document.getElementById("noteInput");
const saveNote = document.getElementById("saveNote");
const noteList = document.getElementById("noteList");

document.addEventListener("DOMContentLoaded", function () {
    const noteInput = document.getElementById("noteInput");
    const saveNote = document.getElementById("saveNote");
    const noteList = document.getElementById("noteList");

    // Ambil catatan yang sudah tersimpan di localStorage
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    // Tampilkan catatan
    function renderNotes() {
        noteList.innerHTML = "";
        notes.forEach((note, index) => {
            const noteCard = document.createElement("div");
            noteCard.classList.add("note-card");
            noteCard.innerHTML = `
                <span>${note}</span>
                <button class="delete-btn" onclick="deleteNote(${index})">Hapus</button>
            `;
            noteList.appendChild(noteCard);
        });
    }

    // Simpan catatan baru
    saveNote.addEventListener("click", function () {
        const noteText = noteInput.value.trim();
        if (noteText !== "") {
            notes.push(noteText);
            localStorage.setItem("notes", JSON.stringify(notes));
            noteInput.value = "";
            renderNotes();
        }
    });

    // Hapus catatan
    window.deleteNote = function (index) {
        notes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        renderNotes();
    };

    // Render catatan saat halaman dimuat
    renderNotes();
});