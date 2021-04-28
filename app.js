"use strict";

// Elements
const currentYear = document.querySelector(".current_year");

const date = new Date();
currentYear.textContent = date.getFullYear();
new Date().getFullYear();
