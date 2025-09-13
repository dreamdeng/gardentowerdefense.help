import fs from 'fs'
import path from 'path'

export function getCodes() {
  const codesPath = path.join(process.cwd(), 'data', 'json', 'codes.json')
  return JSON.parse(fs.readFileSync(codesPath, 'utf8'))
}

export function getUnits() {
  const unitsPath = path.join(process.cwd(), 'data', 'json', 'units.json')
  return JSON.parse(fs.readFileSync(unitsPath, 'utf8'))
}

export function getFAQ() {
  const faqPath = path.join(process.cwd(), 'data', 'json', 'faq.json')
  return JSON.parse(fs.readFileSync(faqPath, 'utf8'))
}

export function getResources() {
  const resourcesPath = path.join(process.cwd(), 'data', 'json', 'resources.json')
  return JSON.parse(fs.readFileSync(resourcesPath, 'utf8'))
}