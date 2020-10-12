textarea = document.getElementById('note')

textarea.value = localStorage.getItem('note');

textarea.addEventListener('change', function (e) {
	localStorage.setItem('note', e.target.value);
})

