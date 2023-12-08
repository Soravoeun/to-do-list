// ---------- déclaration de la fonction add ---------- //
function add() {
  // initialisation de la variable qui récupère la valeur du champs de texte
  let taskInput = document.querySelector("#taskInput").value;

  // initialisation de la variable pour selectionner l'element taskList
  let taskList = document.querySelector("#taskList");

  // si taskInput ( champs de texte) est vide, on affiche une alerte
  if (taskInput === "")  {
    alert("Veuillez saisir une tache.");
    return;
  }

  // ajouter sur la page HTML les éléments (div) suivants avant la fin de la liste existante (ou pas)
  // et en créant une autre div ayant la class"starButton" pour repositionner l'etoile et le bouton delete en css.
  taskList.insertAdjacentHTML(
    "beforeend",
    `<div class="task">
        <div>
          <input type="checkbox" />
          <span class="tasktext">${taskInput}</span>
        </div>
        <div class="starsButton">
          <span class="material-symbols-outlined star">star</span>
          <button class="delete">x</button>
        </div>
      </div>`
  );

  // ---------vider le champs de texte une fois que la liste est ajoutée-------//
  document.querySelector("#taskInput").value = "";

  // initialisation de la variable delete pour selectionner l'élément button et le dernier enfant de la liste task
  let deleteButton = document.querySelectorAll(".task:last-child button");

  // pour chaque dernier enfant selectionné, on ajoute un ecouteur d'evenement (remove)
  deleteButton.forEach(function (deleteBtn) {
    deleteBtn.addEventListener("click", function (event) {
      event.target.parentElement.parentElement.remove();
    });
  });

  // initialisation de la variable pour selectionner le checkbox.
  // input[type='checkbox'] est un moyen pour selectionner un input de type check
  let checkbox = document.querySelectorAll(
    ".task:last-child input[type='checkbox']"
  );
  checkbox.forEach(function (check) {
    // on ajoute un écouteur d'evenement à la fonction check
    check.addEventListener("click", function (e) {
      // si la fonction check est coché,
      if (e.target.checked) {
        // on barre la liste de la  class "done" comme terminer.
        e.target.parentElement.parentElement.classList.add("done");
      } else {
        // sinon on decoche la liste comme pas faite.
        e.target.parentElement.parentElement.classList.remove("done");
      }
    });
  });

  // initialisation de la variable taskText pour selectionner la class task, span et taskText
  let taskText = document.querySelectorAll(".task:last-child span.tasktext");
  // pour chaque élement selectionner, on ajoute un écouteur d'évènement
  taskText.forEach(function (span) {
    span.addEventListener("click", function (e) {
      // si l'element à coté est marqué comme : cocher false
      if (e.target.previousElementSibling.checked) {
        // on barre la liste de la  class "done" comme terminer.
        e.target.previousElementSibling.checked = false;
        e.target.parentElement.parentElement.classList.remove("done");
      } else {
        // sinon on décoche la liste comme pas faite.
        e.target.previousElementSibling.checked = true;
        e.target.parentElement.parentElement.classList.add("done");
      }
    });
  });

  // initialisation de la variable stars pour selectionner l'etoile.
  let stars = document.querySelectorAll(".task:last-child .star");
  // pour chaque étoile sélectionné on verifie s'il y a (contains) la classe yellow.
  stars.forEach(function (star) {
    star.addEventListener("click", function (e) {
      // si il y a yellow,
      if (e.target.classList.contains("yellow")) {
        // Enlever la classe "yellow" pour revenir à la couleur par défaut
        e.target.classList.remove("yellow");
        // on cherche le parent le plus proche de la classe indiqué, ici task,
        // et on enlève la class favorite du fait que yellow a été enlevé.
        e.target.closest(".task").classList.remove("favorite");
      } else {
        // Ajouter la classe "favorite" quand on fait clique sur l'étoile.
        e.target.classList.add("yellow");
        e.target.closest(".task").classList.add("favorite");
      }
    });
  });
}

// initialisation de la variable pour selectionner l'élément id = addButton. et ajouter ce que la function add a comme propriété.
let button = document
  .querySelector("#addButton")
  .addEventListener("click", function () {
    add();
  });

// selectionner le champs de texte et ajouter un écouteur d'evenement
document.querySelector("#taskInput").addEventListener("keyup", function (e) {
  // si pour la touche entrée est saisie, on ajoute les propriété de la fonction add.
  if (e.keyCode === 13) {
    add();
  }
});

// ----------------A décommenter la partie ci-dessous si la partie HTML est décommenter --------------//

// // initialisation de la variable pour selectionner l'élément button
// let deleteButton = document.querySelectorAll(".task button");
// deleteButton.forEach(function (deleteBtn) {
//   // on ajoute un écouteur d'evenement à la fonction deletBtn pour affacer l'element parent et enfant avec .
//   deleteBtn.addEventListener("click", function (event) {
//     event.target.parentElement.remove();
//   });
// });

// // initialisation de la variable pour selectionner le checkbox.
// // input[type='checkbox'] est un moyen pour selectionner un input de type checkbox sans id.
// let checkbox = document.querySelectorAll("input[type='checkbox']");
// checkbox.forEach(function (check) {
//   // on ajoute un écouteur d'evenement à la fonction check
//   check.addEventListener("click", function (e) {
//     // si la fonction check est coché,
//     if (e.target.checked) {
//       // on barre la liste de la  class "done" comme terminer.
//       e.target.parentElement.parentElement.classList.add("done");
//     } else {
//       // sinon on decoche la liste comme pas faite.
//       e.target.parentElement.parentElement.classList.remove("done");
//     }
//   });
// });

// let taskText = document.querySelectorAll(".task span");
// taskText.forEach(function (span) {
//   span.addEventListener("click", function (e) {
//     if (e.target.previousElementSibling.checked) {
//       // on barre la liste de la  class "done" comme terminer.
//       e.target.previousElementSibling.checked = false;
//       e.target.parentElement.parentElement.classList.remove("done");
//     } else {
//       // sinon on decoche la liste comme pas faite.
//       e.target.previousElementSibling.checked = true;
//       e.target.parentElement.parentElement.classList.add("done");
//     }
//   });
// });

// let stars = document.querySelectorAll(".task .star");
// stars.forEach(function (star) {
//   star.addEventListener("click", function (e) {
//     if (e.target.classList.contains("yellow")) {
//       // Enlever la classe "yellow" pour revenir à la couleur par défaut
//       e.target.classList.remove("yellow");
//       e.target.closest(".task").classList.remove("favorite");
//     } else {
//       // Ajouter la classe "yellow" pour la couleur jaune
//       e.target.classList.add("yellow");
//       e.target.closest(".task").classList.add("favorite");

//     }
//   });
// });
