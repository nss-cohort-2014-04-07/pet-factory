'use strict';

var Mongo = require('mongodb');

exports.index = (req, res)=>{
  var pets = global.nss.db.collection('pets');

  pets.find().toArray((err, records)=>{
    res.render('pets/index', {pets: records, bg: 'pets-bg.jpg', title: 'Pet Factory: Pets'});
  });
};

exports.show = (req, res)=>{
  var pets = global.nss.db.collection('pets');
  var _id = Mongo.ObjectID(req.params.id);

  pets.findOne({_id:_id}, (err, record)=>{
    res.render('pets/show', {pet: record, bg: 'pets-bg.jpg', title: 'Pet Factory: Pets'});
  });
};

exports.new = (req, res)=>{
  res.render('pets/new', {bg: 'pets-bg.jpg', title: 'Pet Factory: Pets'});
};

exports.destroy = (req, res)=>{
  var _id = Mongo.ObjectID(req.params.id);
  var pets = global.nss.db.collection('pets');

  pets.findAndRemove({_id:_id}, (err, record)=>{
    res.redirect('/pets');
  });
};

exports.create = (req, res)=>{
  var photo;

  switch(req.body.species){
    case 'Dog':
      photo = 'dog.jpg';
      break;
    case 'Mouse':
      photo = 'mouse.jpg';
      break;
    case 'Kangaroo':
      photo = 'kangaroo.jpg'
  }

  req.body.photo = photo;
  var pets = global.nss.db.collection('pets');
  pets.save(req.body, (err, obj)=>{
    res.redirect(`/pets/${obj._id}`);
  });
};
