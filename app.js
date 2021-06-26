'use strict';

// Revealing project

const allProjects = document.querySelectorAll('.project');

const revealProject = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('project--hidden');
  observer.unobserve(entry.target);
};

const projectObserver = new IntersectionObserver(revealProject, {
  root: null,
  threshold: 0.15,
});

allProjects.forEach(function (project) {
  projectObserver.observe(project);
  project.classList.add('project--hidden');
});

// Copyright year
const currentYear = document.querySelector('.current_year');

const date = new Date();
currentYear.textContent = date.getFullYear();
new Date().getFullYear();
