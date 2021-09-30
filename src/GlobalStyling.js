import styled from "styled-components";

export default styled.div`

* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

a {
  text-decoration: none;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.primary-link {
  color: #fff
}

.secondary-link {
  background-color: #fff;
  color: #000;
}

button {
  border: none;
}

input {
  width: 100%;
  border: 1px;
  margin-bottom: 5px;
  border-radius: 5px;
  display: block;
  padding: 2px 10px;
  color: #4f4f4f
}

textarea {
  width: 100%;
}

label {
  display: block;
}

h1 {
  font-family: "DM Serif Display", serif;
}

.btn {
  border: 1px solid #fff;
  width: 250px;
  border-radius: 20px;
  margin: 5px 0px 5px 0px;

  &:hover {
    background-color: #fff;
    color: #cf96b6;
  }
}


`;