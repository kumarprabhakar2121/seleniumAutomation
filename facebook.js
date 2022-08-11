const { By, Key, Builder } = require("selenium-webdriver");

async function example() {
  var fbUsername = "";
  var fbPassword = "";
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("http://facebook.com");
  driver.sleep(4000);

  await driver.findElement(By.name("email")).sendKeys(fbUsername);
  driver.sleep(2500);

  await driver.findElement(By.id("pass")).sendKeys(fbPassword);
  driver.sleep(3000);
  console.log("logging in");
  await driver.findElement(By.name("login")).sendKeys(Key.RETURN);
}

example();
