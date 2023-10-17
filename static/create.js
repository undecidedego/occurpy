class Create {
    constructor() {
        this.checkbox = document.querySelector("#advanced-mode-selector");
        this.items = document.querySelectorAll(".advanced");

        this.checkbox.addEventListener("change", this.toggleItems.bind(this));
    }

    toggleItems() {
        if (this.checkbox.checked) {
            this.showItems();
        } else {
            this.hideItems();
        }
    }

    showItems() {
        this.items.forEach(item => {
            item.style.display = "block";
        });
    }

    hideItems() {
        this.items.forEach(item => {
            item.style.display = "none";
        });
    }
}

new Create();
