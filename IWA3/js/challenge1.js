
// scripts.js
import {company, year} from './configuration.js'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('.footer').innerText = message

/**
 * 
 * The relative path for the configuration file was not coded in full
 * 
 * Instead of two imports, one import can be used to import both company and yearusing curly brackets
 */