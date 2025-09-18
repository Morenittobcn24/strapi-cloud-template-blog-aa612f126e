'use strict';

const strapi = require('@strapi/strapi');
const fs = require('fs');
const path = require('path');

async function listAllContentTypeUIDs() {
  const app = await strapi().load();
  const contentTypes = app.contentTypes;
  const uids = Object.keys(contentTypes).filter(uid => uid.startsWith('api::') || uid.startsWith('plugin::'));
  console.log('UIDs encontrados:', uids);
  return uids;
}

listAllContentTypeUIDs()
  .then(uids => {
    console.log('✅ Todos los UIDs:', uids);
    process.exit(0);
  })
  .catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });