'use strict';

/**
 * location service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::location.location');
