import startBrowser from "./browser.js"
import scraperController from "./pageController.js"

// Url to browse
let url = "http://books.toscrape.com"

// Start the browser and create a browser instance
let browserInstance = startBrowser()

// Pass the browser instance to the scraper controller
scraperController(browserInstance, url)
