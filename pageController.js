import { scraperObject } from "./pageScraper.js"
import { writeFile } from "fs"

const scraperController = async (browserInstance) => {
  let browser
  let url = "http://books.toscrape.com"

  try {
    let scrapedData = {}

    browser = await browserInstance

    // Call the scraper for different set of books to be scraped
    // scrapedData["Travel"] = await scraperObject.scraper(browser, "Travel")
    scrapedData["HistoricalFiction"] = await scraperObject.scraper(
      browser,
      "Historical Fiction"
    )
    scrapedData["Mystery"] = await scraperObject.scraper(browser, "Mystery")

    writeFile("data.json", JSON.stringify(scrapedData), "utf8", function (err) {
      if (err) {
        return console.log(err)
      }
      console.log(
        "The data has been scraped and saved successfully! View it at './data.json'"
      )
    })

    console.log(scrapedData)
  } catch (err) {
    console.log("Could not resolve the browser instance => ", err)
  }
}

export default (browserInstance) => scraperController(browserInstance)
