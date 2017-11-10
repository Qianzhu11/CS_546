const express = require("express");
const router = express.Router();
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt-nodejs");

let users = [
    { _id: "1245325124124", username: "masterdetective123", hashedPassword: "$2a$06$GpI8ffRxvuPq/nWYrI/tTu8RV9wJYEZQcRBxwndLg6UaJXTa0X1j.", firstName: "Sherlock", lastName: "Holmes", profession: "Detective", bio:"Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle. Known as a \"consulting detective\" in the stories, Holmes is known for a proficiency with observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard." },
    { _id: "723445325124124", username: "lemon", hashedPassword: "$2a$06$SagJO.YW8T7c7Fzh.0VaIuYaAetQKsU2PbmI.VzzjjfWKA8yyLbQe", firstName: "Elizabeth", lastName: "Lemon", profession: "Writer", bio:"Elizabeth Miervaldis \"Liz\" Lemon is the main character of the American television series 30 Rock. She created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan." },
    { _id: "123413245", username: "theboywholived", hashedPassword:"$2a$06$Sm1mE0ale6vltQvfuJ0EtuLABSBQsR.8wMWjhWrzLz0QBQpIa6QL2", firstName:"Harry", lastName:"Potter", profession:"Student", bio:"Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles." }
];

function findUser(username) {
    return users.username === username;
}