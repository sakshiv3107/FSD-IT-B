document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement("table");
    table.border = "1";
    document.body.appendChild(table);
    const headerRow = document.createElement("tr");
    ["Sr.No", "Recipe Name", "Image", "Rating", "Price"].forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    fetch("https://dummyjson.com/recipes")
        .then(response => response.json())
        .then(data => {
            data.recipes.forEach((recipe, index) => {
                const row = document.createElement("tr");
                const srNo = document.createElement("td");
                srNo.textContent = index + 1;
                row.appendChild(srNo);
                const name = document.createElement("td");
                name.textContent = recipe.name;
                row.appendChild(name);
                const imageCell = document.createElement("td");
                const img = document.createElement("img");
                img.src = recipe.image;
                img.alt = recipe.name;
                img.width = 100;
                imageCell.appendChild(img);
                row.appendChild(imageCell);
                const rating = document.createElement("td");
                rating.textContent = recipe.rating;
                row.appendChild(rating);
                const price = document.createElement("td");
                price.textContent = "₹" + (100 + index * 10); 
                row.appendChild(price);
                table.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error fetching recipes:", error);
        });
});