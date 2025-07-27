import aws from '/public/svg/skills/aws.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import c from '/public/svg/skills/c.svg';
import cplusplus from '/public/svg/skills/cplusplus.svg';
import css from '/public/svg/skills/css.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import javascript from '/public/svg/skills/javascript.svg';
import matlab from '/public/svg/skills/matlab.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import nextJS from '/public/svg/skills/nextJS.svg';
import numpy from '/public/svg/skills/numpy.svg';
import python from '/public/svg/skills/python.svg';
import react from '/public/svg/skills/react.svg';
import selenium from '/public/svg/skills/selenium.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import tensorflow from '/public/svg/skills/tensorflow.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'tailwind':
      return tailwind;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'matlab':
      return matlab;
    case 'python':
      return python;
    case 'aws':
      return aws;;
    case 'git':
      return git;
    case 'numpy':
      return numpy;
    case 'selenium':
      return selenium;
    case 'tensorflow':
      return tensorflow;
    default:
      break;
  }
}
