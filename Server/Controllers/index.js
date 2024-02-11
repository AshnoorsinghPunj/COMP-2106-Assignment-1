const User = require('../Models/user');

/**
 * This function will display the home page
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function DisplayHome(req, res, next) {
  /* No need to create a User, but demonstrating how to use the Model */
  let user = new User();
  user.username = 'admin';
  console.log(`username: ${user.username}`);

  /* Now Render the ejs page */
  res.render('index', { title: 'Home', page: 'home', partial: 'header' });
}

/**
 * This function will display the about page
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function DisplayAbout(req, res, next) {
  /* Now Render the ejs page */
  res.render('about', { title: 'About', page: 'about' });
}

/**
 * This function will display the skills page
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function DisplaySkills(req, res, next) {
  /* Now Render the ejs page */
  res.render('skills', { title: 'Skills', page: 'skills' });
}

/**
 * This function will display the resume page
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function DisplayResume(req, res, next) {
  /* Now Render the ejs page */
  res.render('resume', { title: 'Resume', page: 'resume' });
}

/**
 * This function will display the contact page
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function DisplayContact(req, res, next) {
  /* Now Render the ejs page */
  res.render('contact', { title: 'Contact', page: 'contact' });
}


module.exports = {
  DisplayHome: DisplayHome,
  DisplayAbout: DisplayAbout,
  DisplaySkills: DisplaySkills,
  DisplayResume: DisplayResume,
  DisplayContact: DisplayContact
}

