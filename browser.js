import puppeteer from "puppeteer"

const startBrowser = async () => {
  let browser
  try {
    console.log("Opening the browser......")
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ["--start-maximized"],
      ignoreHTTPSErrors: true,
    })
  } catch (err) {
    console.log("Could not create a browser instance => : ", err)
  }
  return browser
}

export default startBrowser
