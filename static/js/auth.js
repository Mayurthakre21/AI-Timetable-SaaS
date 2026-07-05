document.addEventListener("DOMContentLoaded", () => {

    const passwords = document.querySelectorAll("input[type='password']");

    passwords.forEach(input => {

        const wrapper = document.createElement("div");

        wrapper.style.position = "relative";

        input.parentNode.insertBefore(wrapper, input);

        wrapper.appendChild(input);

        const button = document.createElement("button");

        button.type = "button";

        button.innerHTML = "👁";

        button.style.position = "absolute";

        button.style.right = "15px";

        button.style.top = "50%";

        button.style.transform = "translateY(-50%)";

        button.style.border = "none";

        button.style.background = "transparent";

        button.style.cursor = "pointer";

        wrapper.appendChild(button);

        button.onclick = () => {

            input.type =
                input.type === "password"
                ? "text"
                : "password";

        };

    });

});