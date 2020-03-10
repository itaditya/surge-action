const generateSubdomain = require('./generateSubdomain');

// const core = require('@actions/core');
const core = require('./core');

const surge = require('surge');

try {
  const prefix = core.getInput('prefix') || '';
  const suffix = core.getInput('suffix') || '';
  const project = core.getInput('project');
  const domain = core.getInput('domain') || generateSubdomain({ prefix, suffix, project });
  console.log('domain', domain);
  const action = core.getInput('action');
  console.log('action', action);
  process.env.SURGE_LOGIN = core.getInput('login');
  process.env.SURGE_TOKEN = core.getInput('token');
  surge({ default: action })([project, domain]);
} catch (error) {
  console.error(error);
  core.setFailed(error.message);
}
