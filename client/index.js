
// compliment button
  document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
// fortune button
  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
  
//goal box
    let goalForm = document.querySelector('#goal-form')
    let textBox = document.querySelector(".goal");
    let goalDisplay = document.querySelector("#goal-display");
    
    const resetView = arr => {
      goalDisplay.innerHTML = '';

      arr.forEach(goalObj => {
        const newLi = document.createElement('li')
        newLi.textContent = goalObj.goal
        newLi.setAttribute('id', goalObj.id)
  
        newLi.addEventListener('click', deleteItem)
  
        goalDisplay.appendChild(newLi)
      })
    }
    
    goalForm.addEventListener('submit', (evt) => {
      evt.preventDefault();

      const inputText = textBox.value;

      if (!inputText.trim()) {
        alert('Must enter a goal')
        return;
      }

      axios
        .post('http://localhost:4000/api/goals', { item: inputText })
        .then(res => {
          resetView(res.data)
        })
        .catch(err => console.log(err))
    })