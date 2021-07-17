import React from "react";
import { Container } from "react-bootstrap";
import "./styles.css";
import UserCard from "./../UserCard/UserCard";

const UsersContainer = () => {
  const DbUsers = [
    {
      name: "najla",
      lastName: "nasfi",
      email: "najlanasfi@gmail.com",
    },
    {
      name: "ichrak",
      lastName: "chedr",
      email: "ichrak21@gmail.com",
    },
    {
      name: "haythem",
      lastName: "chibani",
      email: "haythem.chibani@gmail.com",
    },
    {
      name: "haythem",
      lastName: "chibani",
      email: "haythem.chibani@gmail.com",
    },
    {
      name: "haythem",
      lastName: "chibani",
      email: "haythem.chibani@gmail.com",
    },
    {
      name: "haythem",
      lastName: "chibani",
      email: "haythem.chibani@gmail.com",
    },
  ];

  return (
    <Container>
      {DbUsers.map((user) => (
        <UserCard user={user}/>
      ))}
    </Container>
  );
};

export default UsersContainer;
