'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {bg: 'main-bg.jpg', title: 'Pet Factory: Home'});
};

exports.about = (req, res)=>{
  res.render('home/about', {bg: 'about-bg.jpg', title: 'Pet Factory: About'});
};

exports.contact = (req, res)=>{
  res.render('home/contact', {bg: 'contact-bg.jpg', title: 'Pet Factory: Contact'});
};
