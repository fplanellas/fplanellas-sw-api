describe("testing the main buttons", () => {
    document.body.innerHTML = `
  <ul id="buttons" class="text-center">
          <li class="newButtonSection"><button id="newPeople" type="button">PEOPLE</button>
          </li>
          <li class="button-section"><button id="newPlanets" type="button">PLANETS</button></li>
          <li class="button-section"><button id="newFilms" type="button">FILMS</button></li>
          <li class="button-section"><button id="newSpecies" type="button">SPECIES</button></li>
          <li class="button-section"><button id="newVehicles" type="button">VEHICLES</button></li>
          <li class="button-section"><button id="newStarships" type="button">STARSHIPS</button></li>
        </ul>
        `;

    require("../componentes/buttons-main/buttonsMain.js");

    test("should return the correct value", () => {
        const addTodoBtn = document.getElementById("newPeople");

        addTodoBtn.value = addTodoBtn.innerHTML.trim().toLowerCase();
        addTodoBtn.click();

        expect(addTodoBtn.value).toBe("people");
    });
});
