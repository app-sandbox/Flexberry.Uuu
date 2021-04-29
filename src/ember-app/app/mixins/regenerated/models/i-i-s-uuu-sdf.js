import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  adf: DS.attr('number')
});

export let ValidationRules = {
  adf: {
    descriptionKey: 'models.i-i-s-uuu-sdf.validations.adf.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SdfE', 'i-i-s-uuu-sdf', {
    adf: attr('Adf', { index: 0 })
  });

  modelClass.defineProjection('SdfL', 'i-i-s-uuu-sdf', {
    adf: attr('Adf', { index: 0 })
  });
};
