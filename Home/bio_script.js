
/* ACCORDION EXTRA SECTION
–––––––––––––––––––––––––––––––––––––––––––––––––– */

//  $(function () {
//    $('[data-toggle="tooltip"]').tooltip({
//      delay: { show: 800, hide: 500 },
//      trigger: "hover"
//    });
//  });


/* ACCORDION SECTION
–––––––––––––––––––––––––––––––––––––––––––––––––– */

const choiceArray = document.querySelectorAll(".choice")

choiceArray.forEach((card) => {
    card.addEventListener("click", () => {
        choiceArray.forEach((element) => {
            element.classList.remove("expand", "unset")
            element.classList.add('small')
        })
        card.classList.remove("small")  /* Can switch toogle for remove */
        card.classList.add('expand') /* Can switch toogle for add */
    });
});

// const contacts = document.querySelectorAll("#contacts")
// contacts.classList.add('expand')