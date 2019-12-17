var childProcess =  require("child_process");
var puppeteer = require("puppeteer");
var path = require("path");

let urls = {
    index: 0,
    arr: [],
    mkUrl: () => {
        for (let i = 11; i < 12; i++) {
            let url = `https://minigame.civaonline.cn/#/game${i + 3}`;
            urls.arr.push(url);
            urls.targetNames.push(`game${i + 3}`);
        }
    },
    targetPath: path.join(__dirname, "screenShot"),
    targetNames: []
};

urls.mkUrl();

let openPage = async (browser, url) => {
        const page = await browser.newPage();
        await page.goto(url);
        setTimeout(async () => {
            await page.mouse.move(400, 430);
            await page.mouse.down();
            await page.mouse.up();
            screenShot(browser, page);
        }, 6000)
}

let openBrowser = (url) => {
    puppeteer.launch({headless:false})
        .then(browser => {
            openPage(browser, url);
        })
}

function screenShot(browser, page ) {
    setTimeout(async () => {
        await page.screenshot({
            path: urls.targetPath + "/" + urls.targetNames[urls.index] + ".jpg",
            type: "jpeg",
            clip: {
                x: 0,
                y: 83,
                width: 800,
                height: 515 - 83
            }
        });
        await page.close();
        urls.index += 1;
            console.log(urls.index);
        if (urls.index > urls.arr.length - 1) {
            await browser.close();
        } else {
            openPage(browser, urls.arr[urls.index]);
        }
    }, 6000)
}

function start() {
    // let rmFilesCMD = childProcess.exec(`rm ${urls.targetPath}/*`, (error, stdout, stderr) => {
    //     if (error) {
    //         console.log(error.stack);
    //     }
    //     console.log('stdout' + stdout);
    //     console.log('stderr' + stderr);
    // });
    // rmFilesCMD.on("exit", code => { 
    //     console.log(code); 
    // });
    openBrowser(urls.arr[urls.index]);
}

start();
