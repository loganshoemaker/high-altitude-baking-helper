const half = "½";
const quarter = "¼";
const threeFourths = "¾";

const containsFraction = (text) => {
    return (
        text.includes(half) ||
        text.includes(quarter) ||
        text.includes(threeFourths)
    );
};

var main = () => {
    var ingredients = Array.from(document.getElementsByClassName("ingredients-item-name"));
    ingredients.forEach(ingredient => {
        const text = ingredient.textContent.trim().toLowerCase();
        
        let wholeAmount = text.replace(/\D/g, "");
        
        if(wholeAmount == "") {
            if(containsFraction(text)) {
                let update = "";

                if(text.includes("flour")) {
                    update = "You may want to add up to 2 tablespoons for every 1 cup!";    
                }
                if(text.includes("sugar")) {
                    update = "You may want to remove up to 2 tablespoons of sugar for every 1 cup!";
                }

                ingredient.innerHTML = `${text} : <span class="habk-wrapper">${update}</span>`;
            }
        }

        if(
            Number.isInteger(parseInt(wholeAmount)) &&
            text.includes("cup") &&
            text.includes("flour")
        ){
            const update = `You may want to add up to ${parseInt(wholeAmount) * 2} tablespoon${wholeAmount === "1" ? "" : "s"} of flour!`;
            ingredient.innerHTML = `${text} : <span class="habk-wrapper">${update}</span>`;
        }

        if(
            Number.isInteger(parseInt(wholeAmount)) &&
            text.includes("cup") &&
            text.includes("sugar")
        ){
            const update = `You may want to remove up to ${parseInt(wholeAmount) * 2} tablespoon${wholeAmount === "1" ? "" : "s"} of this sugar!`;
            ingredient.innerHTML = `${text} <span class="habk-wrapper">${update}</span>`;
        }

        if(
            Number.isInteger(parseInt(wholeAmount)) &&
            text.includes("yeast")
        ){
            const update = `You may want to start with only 75% of the recommended amount of yeast!`;
            ingredient.innerHTML = `${text} <span class="habk-wrapper">${update}</span>`;
        }

        if(
            Number.isInteger(parseInt(wholeAmount)) &&
            text.includes("egg") && 
            (
                !text.includes("extra large")
            )
        ){
            const text = ingredient.innerHTML.replace("egg", "<span class='habk-wrapper-inline'>extra large</span> egg");

            const update = `You may want to start with only 75% of the recommended amount of yeast!`;
            ingredient.innerHTML = text;
        }

        if(
            text.includes("baking powder") ||
            text.includes("baking soda") &&
            (
                text.includes("teaspoon") ||
                text.includes("tablespoon") ||
                text.indcludes("teaspoons") ||
                text.includes("tablespoons") ||
                text.includes("tsp") ||
                text.includes("tbsp")
            )
        )
        {
            const update = `You may want to use half the amount of this chemical leavener!`;
            console.log(update)
            ingredient.innerHTML = `${text}<span class="habk-wrapper">${update}</span>`;
        }
    });
}

setTimeout(function(){ main()}, 1000);
