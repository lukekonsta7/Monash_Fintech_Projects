const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom'

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})