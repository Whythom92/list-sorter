function sortList() {
      const input = document.getElementById('input').value;
      const list = input.split(',');
      list.sort();
      const ul = document.getElementById('list');
      ul.innerHTML = '';
      for (let i = 0; i < list.length; i++) {
        const li = document.createElement('li');
        li.textContent = list[i];
        ul.appendChild(li);
      }
    }