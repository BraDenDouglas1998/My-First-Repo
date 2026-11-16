
import * as fs from "node:fs";
import { say } from "cowsay";

console.log("Choo choo!");

const words = ["Hello", "Welcome", "To", "Node.js"];

const text = words.join("\n");

fs.writeFile("words.txt", text, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log("File written!");
    }
});

const output = say({
    text: "Moo! Welcome to Node.js!"
});

console.log(output);