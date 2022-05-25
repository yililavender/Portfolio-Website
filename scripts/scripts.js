import { validateFields } from './utils/validateForm.js';

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("preloader").classList.add("hidden");
        setTimeout(() => {
            document.body.removeChild(document.getElementById("preloader"));
        }, 200)
    }, 300);
});

Tu.tScroll({
    't-element': '.fadeUp',
    't-duration': 1
})

Tu.tScroll({
    't-element': '.fadeLeft',
    't-duration': 1
})

Tu.tScroll({
    't-element': '.fadeRight',
    't-duration': 1
})

Tu.tScroll({
    't-element': '.fadeDown',
    't-duration': 1
})

const form = document.getElementById("contact_form");


form.addEventListener('submit', e => {
    e.preventDefault();


    if (validateFields()) {
        axios({
            url: 'https://formspree.io/f/xayvvowz',
            method: 'post',
            headers: {
                'Accept': 'application/json'
            },
            data: {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                subject: document.getElementById('subject').value.trim(),
                message: document.getElementById('message').value.trim()
            }
        }).then(data => {
            swal({
                title: "Good job!",
                text: "Message succesfully sent.",
                icon: "success",
            })

            console.log(data)
        })
            .catch((error) => {
                swal({
                    title: "Something went wrong...",
                    text: error,
                    icon: "error",
                });
                console.log(error);
            });
    }
})

